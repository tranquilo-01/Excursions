import { Injectable } from '@angular/core';
import { ExcFilterData } from '../models/excFilterData.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filters: ExcFilterData;

  constructor() {
    this.filters = new ExcFilterData();
  }
}
