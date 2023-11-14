import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerExcursionDetailsComponent } from './manager-excursion-details.component';

describe('ManagerExcursionDetailsComponent', () => {
  let component: ManagerExcursionDetailsComponent;
  let fixture: ComponentFixture<ManagerExcursionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerExcursionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerExcursionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
