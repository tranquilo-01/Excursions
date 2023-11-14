import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BasketElement } from '../models/basket-element.model';
import { AuthService } from './auth.service';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root',
})
export class BasketResolverService implements Resolve<BasketElement[]> {
  constructor(
    private basketService: BasketService,
    private auth: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): BasketElement[] | Observable<BasketElement[]> | Promise<BasketElement[]> {
    let basket = this.basketService.basket;
    if (!this.basketService.resolved) {
      console.log('resolver resolving basket');
      return this.basketService.fetchBasket();
    } else {
      return basket;
    }
  }
}
