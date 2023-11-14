import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Photos } from '../models/photos.model';
import { DBServiceService } from './dbservice.service';
import { PhotosService } from './photos.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoResolverService implements Resolve<any[]> {
  constructor(
    private dbService: DBServiceService,
    private photoService: PhotosService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Photos[] | Observable<Photos[]> | Promise<Photos[]> {
    let photos = this.photoService.getPhotos();
    if (photos.length === 0) {
      return this.dbService.fetchPhotos();
    } else {
      return photos;
    }
  }
}
