import { Component, OnInit } from '@angular/core';
import { ExcFilterData } from './models/excFilterData.model';
import { BasketService } from './services/basket.service';
import { BoughtExcursionsService } from './services/bought-excursions.service';
import { BoughtFilterService } from './services/bought-filter.service';
import { DBServiceService } from './services/dbservice.service';
import { ExcursionsData } from './services/excursions-data.service';
import { ExcursionsResolverService } from './services/excursions-resolver.service';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'excursions';
  excursions: ExcursionsData;

  constructor(
    private excursionsData: ExcursionsData,
    private basketService: BasketService,
    private filter: ExcFilterData,
    private boughtExcursionsService: BoughtExcursionsService,
    private boughtFilterservice: BoughtFilterService,
    private photosService: PhotosService,
    private dbService: DBServiceService,
    private excursionResolver: ExcursionsResolverService
  ) {
    this.excursions = excursionsData;
  }
}
