import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { BasketElement } from 'src/app/models/basket-element.model';
import { BasketService } from 'src/app/services/basket.service';
import { AuthService } from '../services/auth.service';
import { BoughtExcursionsService } from '../services/bought-excursions.service';
import { DBServiceService } from '../services/dbservice.service';
import { ExcursionsData } from '../services/excursions-data.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  boughtExcursions: BasketElement[] = [];
  totalPrice: number;

  constructor(
    private excursionsData: ExcursionsData,
    public basketData: BasketService,
    private boughtExcursionsData: BoughtExcursionsService,
    private dbService: DBServiceService,
    private auth: AuthService
  ) {
    this.boughtExcursions = boughtExcursionsData.excursions;
    this.totalPrice = basketData.totalPrice;
    this.basketData.fetchBasket().subscribe();
  }

  ngOnInit() {}

  onDelete(idx: number) {
    this.basketData.remove(idx);
    this.totalPrice = this.basketData.totalPrice;
  }

  onBuy(idx: number) {
    let name = this.basketData.basket[idx].name;
    console.log(name);

    let excursionIdx: number = this.excursionsData.excursions.findIndex(
      (element) => element.name == this.basketData.basket[idx].name
    );

    let nop =
      this.excursionsData.excursions[excursionIdx].numberOfPlaces -
      this.basketData.basket[idx].placesReserved;

    this.excursionsData.excursions[excursionIdx].numberOfPlaces = nop;

    this.boughtExcursionsData.add(
      this.basketData.basket[idx],
      this.basketData.basket[idx].placesReserved
    );

    // update liczby miejsc na liscie wycieczek
    this.dbService.db
      .list('excursions')
      .snapshotChanges()
      .pipe(first())
      .subscribe((excrsns: any) => {
        for (let exc of excrsns) {
          if (exc.payload.val().name == name) {
            this.dbService.db
              .object('excursions/' + exc.payload.key)
              .update({ numberOfPlaces: nop });
          }
        }
      });
    this.onDelete(idx);
  }

  onBuyAll() {
    while (this.basketData.basket.length >= 0) {
      this.onBuy(0);
    }
  }

  onClearAll() {
    this.basketData.clear();
    this.totalPrice = 0;
  }
}
