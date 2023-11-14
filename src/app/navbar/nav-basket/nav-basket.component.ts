import { Component } from '@angular/core';
import { BasketElement } from 'src/app/models/basket-element.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-nav-basket',
  templateUrl: './nav-basket.component.html',
  styleUrls: ['./nav-basket.component.css'],
})
export class NavBasketComponent {
  totalPrice: number;

  constructor(public basketData: BasketService) {
    this.totalPrice = basketData.totalPrice;
  }

  onDelete(idx: number) {
    this.basketData.remove(idx);
    this.totalPrice = this.basketData.totalPrice;
  }
}
