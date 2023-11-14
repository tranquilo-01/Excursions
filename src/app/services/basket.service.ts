import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { elementAt, first, map, take } from 'rxjs';
import { BasketElement } from '../models/basket-element.model';
import { Excursion } from '../models/excursion.model';
import { AuthService } from './auth.service';
import { DBServiceService } from './dbservice.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: BasketElement[] = [];
  totalPrice: number;
  resolved: boolean = false;

  constructor(
    private dbService: DBServiceService,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.totalPrice = 0;
  }

  update(exc: Excursion, places: number) {
    let inBasketIdx: number = this.basket.findIndex(
      (element) => element.name == exc.name
    );
    if (inBasketIdx > -1) {
      this.basket.splice(inBasketIdx, 1);
    }
    this.basket.push(
      new BasketElement(exc.name, exc.startDate, exc.endDate, places, exc.price)
    );
    this.dbService.updateBasket(
      new BasketElement(exc.name, exc.startDate, exc.endDate, places, exc.price)
    );

    this.totalPrice = 0;
    for (let el of this.basket) {
      this.totalPrice += el.unitPrice * el.placesReserved;
    }
  }

  remove(idx: number) {
    this.dbService.removeFromBasket(this.basket[idx]);
    this.basket.splice(idx, 1);
    this.totalPrice = 0;
    for (let el of this.basket) {
      this.totalPrice += el.unitPrice * el.placesReserved;
    }
  }

  clear() {
    this.basket.splice(0);
    this.totalPrice = 0;
  }

  fetchBasket() {
    // TODO przy starcie kucz jest undefined, total price sie nie aktualizuje
    return this.db
      .list('users/' + this.authService.key + '/basket')
      .valueChanges()
      .pipe(
        map((excs) => {
          this.basket = excs as BasketElement[];
          return this.basket;
        })
      );
  }
}
