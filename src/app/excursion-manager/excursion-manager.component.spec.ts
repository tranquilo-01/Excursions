import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionManagerComponent } from './excursion-manager.component';

describe('ExcursionManagerComponent', () => {
  let component: ExcursionManagerComponent;
  let fixture: ComponentFixture<ExcursionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
