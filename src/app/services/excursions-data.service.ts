import { Injectable, OnInit } from '@angular/core';
import { Excursion } from '../models/excursion.model';

@Injectable({
  providedIn: 'root',
})
export class ExcursionsData {
  excursions: Excursion[] = [];
  formOpen = false;
  lowestPrice: number;
  highestPrice: number;
  lowestPlaces: number;
  highestPlaces: number;
  countries: string[];
  currentID = -1;

  constructor() {}

  getExcursions(): Excursion[] {
    return this.excursions;
  }

  setExcursions(excursions: Excursion[]) {
    this.excursions = excursions;
  }

  getLowestPrice() {
    let cheapest = this.excursions[0].price;
    for (let ex of this.excursions) {
      if (ex.price < cheapest) {
        cheapest = ex.price;
      }
    }
    return cheapest;
  }

  getHighestPrice() {
    let biggest = this.excursions[0].price;
    for (let ex of this.excursions) {
      if (ex.price > biggest) {
        biggest = ex.price;
      }
    }
    return biggest;
  }

  getMinPeople() {
    let mp = this.excursions[0].numberOfPlaces;
    for (let ex of this.excursions) {
      if (ex.numberOfPlaces < mp) {
        mp = ex.numberOfPlaces;
      }
    }
    return mp;
  }

  getMaxPeople() {
    let mp = this.excursions[0].numberOfPlaces;
    for (let ex of this.excursions) {
      if (ex.numberOfPlaces > mp) {
        mp = ex.numberOfPlaces;
      }
    }
    return mp;
  }

  getCountries() {
    let result: string[] = [];
    for (let exc of this.excursions) {
      if (!result.includes(exc.country)) {
        result.push(exc.country);
      }
    }
    return result;
  }

  removeExcursion(idx: number) {
    this.excursions.splice(idx, 1);
  }

  addExcursion(exc: Excursion) {
    this.excursions.push(exc);
    this.lowestPlaces = this.getMinPeople();
    this.highestPlaces = this.getMaxPeople();
    this.lowestPrice = this.getLowestPrice();
    this.highestPrice = this.getHighestPrice();
    this.countries = this.getCountries();
  }
}
