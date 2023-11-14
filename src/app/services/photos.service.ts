import { Injectable } from '@angular/core';
import { Photos } from '../models/photos.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  photos: Photos[] = [];

  constructor() {}

  getPhotos(): Photos[] {
    return this.photos;
  }
}
