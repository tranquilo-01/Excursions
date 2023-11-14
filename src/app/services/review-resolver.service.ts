import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ExcursionReview } from '../models/excursion-review.model';
import { ReviewDetails } from '../models/review-details.model';
import { DBServiceService } from './dbservice.service';
import { RevievsService } from './revievs.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewResolverService implements Resolve<ExcursionReview[]> {
  constructor(
    private dbService: DBServiceService,
    private reviewService: RevievsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | ExcursionReview[]
    | Observable<ExcursionReview[]>
    | Promise<ExcursionReview[]> {
    let reviews = this.reviewService.getReviews();
    if (reviews.length === 0) {
      return this.dbService.fetchReviews();
    } else {
      return reviews;
    }
  }
}
