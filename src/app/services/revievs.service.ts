import { Injectable } from '@angular/core';
import { ExcursionReview } from '../models/excursion-review.model';

@Injectable({
  providedIn: 'root',
})
export class RevievsService {
  reviews: ExcursionReview[] = [];

  constructor() {}

  getReviews(): ExcursionReview[] {
    return this.reviews;
  }
}
