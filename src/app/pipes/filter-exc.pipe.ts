import { Pipe, PipeTransform } from '@angular/core';
import { ExcFilterData } from '../models/excFilterData.model';
import { Excursion } from '../models/excursion.model';

@Pipe({
  name: 'filterExc',
  pure: false,
})
export class FilterExcPipe implements PipeTransform {
  transform(excursions: Excursion[], filters: ExcFilterData): Excursion[] {
    if (filters.title != '') {
      excursions = excursions.filter((excursion) => {
        return excursion.name.includes(filters.title);
      });
    }
    if (filters.countries.length != 0) {
      excursions = excursions.filter((excursion) => {
        return filters.countries.includes(excursion.country);
      });
    }
    if (filters.startDate != '') {
      excursions = excursions.filter((excursion) => {
        return new Date(filters.startDate) <= new Date(excursion.startDate);
      });
    }
    if (filters.endDate != '') {
      excursions = excursions.filter((excursion) => {
        return new Date(filters.endDate) >= new Date(excursion.endDate);
      });
    }
    if (filters.minPeople != -1) {
      excursions = excursions.filter((excursion) => {
        return excursion.numberOfPlaces >= filters.minPeople;
      });
    }
    if (filters.maxPeople != -1) {
      excursions = excursions.filter((excursion) => {
        return excursion.numberOfPlaces <= filters.maxPeople;
      });
    }
    if (filters.minPrice != -1) {
      excursions = excursions.filter((excursion) => {
        return excursion.price >= filters.minPrice;
      });
    }
    if (filters.maxPrice != -1) {
      excursions = excursions.filter((excursion) => {
        return excursion.price <= filters.maxPrice;
      });
    }

    return excursions;
  }
}
