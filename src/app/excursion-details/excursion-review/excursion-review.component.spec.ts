import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionReviewComponent } from './excursion-review.component';

describe('ExcursionReviewComponent', () => {
  let component: ExcursionReviewComponent;
  let fixture: ComponentFixture<ExcursionReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
