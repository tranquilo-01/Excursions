import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first, map, max, Observable } from 'rxjs';
import { BasketElement } from '../models/basket-element.model';
import { ExcursionReview } from '../models/excursion-review.model';
import { Excursion } from '../models/excursion.model';
import { Photos } from '../models/photos.model';
import { ReviewDetails } from '../models/review-details.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { ExcursionsData } from './excursions-data.service';
import { PhotosService } from './photos.service';
import { RevievsService } from './revievs.service';

@Injectable({
  providedIn: 'root',
})
export class DBServiceService {
  excursions: Observable<any[]>;
  photos: Observable<any[]>;
  reviews: Observable<any[]>;
  currentID = -1;

  constructor(
    public db: AngularFireDatabase,
    private excursionsData: ExcursionsData,
    private photoService: PhotosService,
    private reviewService: RevievsService,
    private authService: AuthService
  ) {
    this.excursions = this.db.list('excursions').valueChanges();
    this.photos = this.db.list('photos').valueChanges();
    this.reviews = this.db.list('reviews').valueChanges();
  }

  getExcursions() {
    return this.excursions;
  }

  getPhotos() {
    return this.photos;
  }

  getReviews() {
    return this.reviews;
  }

  getExcursionList() {
    return this.excursionsData.excursions;
  }

  // ---------------------------------PHOTOS-----------------------------

  fetchPhotos() {
    this.photos = this.db.list('photos').valueChanges();
    return this.getPhotos().pipe(
      map((photoList) => {
        for (let photo of photoList) {
          this.photoService.photos.push({
            id: photo.id,
            urls: photo.urls,
          } as Photos);
        }
        return this.photoService.getPhotos();
      })
    );
  }

  updatePhotos(newPhotos: Photos) {
    this.db
      .list('excursions')
      .snapshotChanges()
      .pipe(first())
      .subscribe((photos: any) => {
        for (let photo of photos) {
          if (photo.payload.val().id == newPhotos.id) {
            this.db.object('photos/' + photo.payload.key).update({
              urls: newPhotos.urls,
            });
          }
        }
      });
  }

  // ------------------------------REVIEWS-------------------------------

  fetchReviews() {
    this.reviews = this.db.list('reviews').valueChanges();
    return this.getReviews().pipe(
      map((reviewList) => {
        for (let review of reviewList) {
          this.reviewService.reviews.push({
            id: review.id,
            details: review.details,
          } as ExcursionReview);
        }
        return this.reviewService.getReviews();
      })
    );
  }

  pushReview(id: number, newDetails: any) {
    this.db
      .list('reviews')
      .snapshotChanges()
      .pipe(first())
      .subscribe((revs: any) => {
        for (let rev of revs) {
          console.log('id: ' + rev.payload.val().id);
          if (rev.payload.val().id == id) {
            console.log(rev.payload.val().details);
            this.db
              .list('reviews/' + rev.payload.key + '/details')
              .push(newDetails);
          }
        }
      });
  }

  // ----------------------------EXCURSIONS----------------------------

  pushNewExcursion(newExcursion: Excursion, newPhotos: Photos) {
    newExcursion.id = this.currentID;
    newPhotos.id = this.currentID;
    this.db.list('excursions').push(newExcursion);
    this.db.list('photos').push(newPhotos);
    this.db.list('reviews').push({ id: this.currentID, details: [] });
    this.currentID += 1;
  }

  updateExcursion(newExcursion: Excursion) {
    this.db
      .list('excursions')
      .snapshotChanges()
      .pipe(first())
      .subscribe((excrsns: any) => {
        for (let exc of excrsns) {
          if (exc.payload.val().id == newExcursion.id) {
            this.db.object('excursions/' + exc.payload.key).update({
              name: newExcursion.name,
              country: newExcursion.country,
              startDate: newExcursion.startDate,
              endDate: newExcursion.endDate,
              price: newExcursion.price,
              numberOfPlaces: newExcursion.numberOfPlaces,
              description: newExcursion.description,
              imgLink: newExcursion.imgLink,
            });
          }
        }
      });
  }

  fetchExcursions() {
    this.excursions = this.db.list('excursions').valueChanges();
    return this.getExcursions().pipe(
      map((excList) => {
        for (let exc of excList) {
          this.currentID = Math.max(this.currentID, exc.id) + 1;
          this.excursionsData.excursions.push({
            id: exc.id,
            name: exc.name,
            country: exc.country,
            startDate: exc.startDate,
            endDate: exc.endDate,
            price: exc.price,
            numberOfPlaces: exc.numberOfPlaces,
            description: exc.description,
            imgLink: exc.imgLink,
          } as Excursion);
        }
        this.excursionsData.currentID = this.currentID;
        return this.excursionsData.getExcursions();
      })
    );
  }

  //-------------------------------BASKET---------------------------------

  updateBasket(element: BasketElement) {
    this.removeFromBasket(element);
    this.db.list('users/' + this.authService.key + '/basket').push(element);
  }

  removeFromBasket(element: BasketElement) {
    this.db
      .list('users/' + this.authService.key + '/basket')
      .snapshotChanges()
      .pipe(first())
      .subscribe((excrsns: any) => {
        for (let exc of excrsns) {
          if (exc.payload.val().name == element.name) {
            this.db
              .list('users/' + this.authService.key + '/basket')
              .remove(exc.payload.key);
          }
        }
      });
  }
}
