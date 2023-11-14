import { ReviewDetails } from './review-details.model';

export class ExcursionReview {
  id: number;
  details: ReviewDetails[] = [];

  constructor(id: number, details: ReviewDetails[]) {
    this.id = id;
    for (let detail of details) {
      this.details.push(detail);
    }
  }
}
