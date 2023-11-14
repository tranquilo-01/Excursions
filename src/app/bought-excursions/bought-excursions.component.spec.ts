import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtExcursionsComponent } from './bought-excursions.component';

describe('BoughtExcursionsComponent', () => {
  let component: BoughtExcursionsComponent;
  let fixture: ComponentFixture<BoughtExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoughtExcursionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoughtExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
