import { Component } from '@angular/core';
import { DBServiceService } from 'src/app/services/dbservice.service';
import { ExcFilterData } from '../../models/excFilterData.model';
import { ExcursionsData } from '../../services/excursions-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  filters: ExcFilterData;
  eData: ExcursionsData;
  lowestprice: number;
  highestprice: number;
  lowestplaces: number;
  highestplaces: number;

  constructor(
    private filterData: ExcFilterData,
    private excData: ExcursionsData,
    private dbService: DBServiceService
  ) {
    this.eData = excData;
    this.filters = filterData;
    this.lowestplaces = excData.getMinPeople();
    this.highestplaces = excData.getMaxPeople();
    this.lowestprice = excData.getLowestPrice();
    this.highestprice = excData.getHighestPrice();
    this.filters.maxPeople = this.highestplaces;
    this.filters.minPeople = this.lowestplaces;
    this.filters.minPrice = this.lowestprice;
    this.filters.maxPrice = this.highestprice;
  }

  countryToggled(country: string) {
    if (this.filters.countries.includes(country)) {
      let idx = this.filters.countries.indexOf(country);
      this.filters.countries.splice(idx, 1);
    } else {
      this.filters.countries.push(country);
    }
  }
}
