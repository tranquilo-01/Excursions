import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExcursionComponent } from './create-excursion.component';

describe('CreateExcursionComponent', () => {
  let component: CreateExcursionComponent;
  let fixture: ComponentFixture<CreateExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExcursionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
