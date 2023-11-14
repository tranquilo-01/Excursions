import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Excursion } from '../models/excursion.model';
import { Photos } from '../models/photos.model';
import { BasketService } from '../services/basket.service';
import { ExcursionsData } from '../services/excursions-data.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-excursion-details',
  templateUrl: './excursion-details.component.html',
  styleUrls: ['./excursion-details.component.css'],
})
export class ExcursionDetailsComponent {
  excursions: Excursion[] = [];
  idx: number;
  excursion: Excursion;
  placesChosen: number = 0;
  numberOfPlaces: number;
  photos: Photos[] = [];

  constructor(
    private route: ActivatedRoute,
    private excursionsData: ExcursionsData,
    private basket: BasketService,
    private photosData: PhotosService
  ) {}

  ngOnInit() {
    this.excursions = this.excursionsData.excursions;
    this.photos = this.photosData.photos;
    this.idx = this.route.snapshot.params['id'];
    this.excursion = this.excursions[this.idx];
    this.numberOfPlaces = this.excursion.numberOfPlaces;
    this.route.params.subscribe((params: Params) => {
      this.idx = params['id'];
      this.numberOfPlaces = this.excursion.numberOfPlaces;
      this.excursion = this.excursions[this.idx];
    });
  }

  onAddPlace() {
    this.placesChosen++;
  }

  onRemovePlace() {
    this.placesChosen--;
  }

  onDelete() {
    console.log(this.idx);
    this.excursionsData.removeExcursion(this.idx);
  }

  updateBasket() {
    this.basket.update(this.excursion, this.placesChosen);
    this.numberOfPlaces = this.excursion.numberOfPlaces - this.placesChosen;
  }
}
