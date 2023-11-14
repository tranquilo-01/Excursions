import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { BasketElement } from '../models/basket-element.model';
import { BoughtExcursion } from '../models/bought-excursion.model';
import { Excursion } from '../models/excursion.model';
import { AuthService } from './auth.service';
import { DBServiceService } from './dbservice.service';

@Injectable({
  providedIn: 'root',
})
export class BoughtExcursionsService {
  excursions: BoughtExcursion[] = [];

  constructor(private db: DBServiceService, private authService: AuthService) {}

  add(exc: BasketElement, places: number) {
    let now = new Date();
    let date =
      now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    let bought = new BoughtExcursion(
      exc.name,
      exc.startDate,
      exc.endDate,
      places,
      exc.unitPrice,
      date
    );
    console.log(bought);
    // let inBasketIdx: number = this.excursions.findIndex(
    //   (element) => element.name == exc.name
    // );
    this.excursions.push(bought);
    this.db.db
      .list('users/' + this.authService.key + '/bought')
      .push(bought as BoughtExcursion);
  }

  fetchBought() {
    // TODO przy starcie kucz jest undefined, total price sie nie aktualizuje
    console.log('fetching bought data of: ' + this.authService.key);
    return this.db.db
      .list('users/' + this.authService.key + '/bought')
      .valueChanges()
      .pipe(
        take(1),
        map((excs) => {
          for (let exc of excs as BoughtExcursion[]) {
            this.excursions.push({
              name: exc.name,
              startDate: exc.startDate,
              endDate: exc.endDate,
              placesReserved: exc.placesReserved,
              unitPrice: exc.unitPrice,
              boughtDate: exc.boughtDate,
            } as BoughtExcursion);
          }
          return this.excursions;
        })
      );
  }
}
