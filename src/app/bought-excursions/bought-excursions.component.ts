import { Component } from '@angular/core';
import { BasketElement } from '../models/basket-element.model';
import { BoughtExcursion } from '../models/bought-excursion.model';
import { BasketService } from '../services/basket.service';
import { BoughtExcursionsService } from '../services/bought-excursions.service';
import { BoughtFilterService } from '../services/bought-filter.service';

@Component({
  selector: 'app-bought-excursions',
  templateUrl: './bought-excursions.component.html',
  styleUrls: ['./bought-excursions.component.css'],
})
export class BoughtExcursionsComponent {
  boughtFilterService: BoughtFilterService;
  excursions: BoughtExcursion[] = [];

  constructor(
    boughtFilterService: BoughtFilterService,
    public boughtExcursions: BoughtExcursionsService
  ) {
    this.boughtFilterService = boughtFilterService;
  }

  ngOnInit() {
    this.excursions = this.boughtExcursions.excursions;
  }

  onGetStatus(startDate: string, endDate: string) {
    let today = new Date();
    if (today < new Date(startDate)) {
      return 'COMING';
    } else if (new Date(startDate) <= today && today <= new Date(endDate)) {
      return 'ONGOING';
    } else {
      return 'DONE';
    }
  }
}
