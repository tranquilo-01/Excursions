import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewDetails } from 'src/app/models/review-details.model';
import { AuthService } from 'src/app/services/auth.service';
import { BoughtExcursionsService } from 'src/app/services/bought-excursions.service';
import { DBServiceService } from 'src/app/services/dbservice.service';
import { ExcursionsData } from 'src/app/services/excursions-data.service';
import { RevievsService } from 'src/app/services/revievs.service';

@Component({
  selector: 'app-excursion-review',
  templateUrl: './excursion-review.component.html',
  styleUrls: ['./excursion-review.component.css'],
})
export class ExcursionReviewComponent {
  idx: number;
  name: string;
  email: string;
  reviews: ReviewDetails[] = [];
  @ViewChild('f') reviewForm: NgForm;
  showForm = false;

  constructor(
    private route: ActivatedRoute,
    private excursionReviewsService: RevievsService,
    private dbService: DBServiceService,
    private excursionData: ExcursionsData,
    private bought: BoughtExcursionsService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.idx = this.route.snapshot.params['id'];
    this.name = this.excursionData.excursions[this.idx].name;
    this.email = this.auth.userEmail;
    this.route.params.subscribe((params: Params) => {
      this.idx = params['id'];
    });
    let details = Object.values(
      this.excursionReviewsService.reviews[this.idx].details
    );
    console.log(details);
    for (let detail of details) {
      this.reviews.push(detail);
    }
    console.log(this.reviews);
  }

  onSubmit(form: NgForm) {
    let newReview = new ReviewDetails(
      this.reviewForm.value.nick,
      this.name,
      this.reviewForm.value.review,
      this.reviewForm.value.date
    );
    this.reviews.push(newReview);
    this.dbService.pushReview(this.idx, newReview);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  canReview(): boolean {
    for (let exc of this.bought.excursions) {
      if (exc.name == this.name) {
        return true;
      }
    }
    for (let rev of this.reviews) {
      if (rev.nick == this.auth.userEmail) {
        return false || this.auth.canModify();
      }
    }
    return false || this.auth.canModify();
  }
}
