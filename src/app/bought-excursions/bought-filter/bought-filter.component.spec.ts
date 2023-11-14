import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtFilterComponent } from './bought-filter.component';

describe('BoughtFilterComponent', () => {
  let component: BoughtFilterComponent;
  let fixture: ComponentFixture<BoughtFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoughtFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoughtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
