import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionTileComponent } from './excursion-tile.component';

describe('ExcursionTileComponent', () => {
  let component: ExcursionTileComponent;
  let fixture: ComponentFixture<ExcursionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
