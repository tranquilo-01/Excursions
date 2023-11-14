import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBasketComponent } from './nav-basket.component';

describe('NavBasketComponent', () => {
  let component: NavBasketComponent;
  let fixture: ComponentFixture<NavBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
