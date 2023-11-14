import { Pipe, PipeTransform } from '@angular/core';
import { BoughtExcursion } from '../models/bought-excursion.model';
import { BoughtFilterService } from '../services/bought-filter.service';

@Pipe({
  name: 'filterBought',
  pure: false,
})
export class FilterBoughtPipe implements PipeTransform {
  transform(
    boughtExcursions: BoughtExcursion[],
    filters: BoughtFilterService
  ): BoughtExcursion[] {
    if (filters.statuses.length != 0) {
      boughtExcursions = boughtExcursions.filter((boughtExcursion) => {
        return filters.statuses.includes(
          this.getStatus(boughtExcursion.startDate, boughtExcursion.endDate)
        );
      });
    }
    return boughtExcursions;
  }

  getStatus(startDate: string, endDate: string) {
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
