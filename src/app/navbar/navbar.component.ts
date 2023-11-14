import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasketElement } from '../models/basket-element.model';
import { AuthService } from '../services/auth.service';
import { BasketService } from '../services/basket.service';
import { DBServiceService } from '../services/dbservice.service';
import { ExcursionsData } from '../services/excursions-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  basketOpen: boolean = false;
  userOpen: boolean = false;
  excursions: ExcursionsData;

  constructor(
    private excData: ExcursionsData,
    private dbService: DBServiceService,
    public authService: AuthService,
    private basketService: BasketService
  ) {
    this.excursions = excData;
  }

  fetchBasket() {
    this.basketService.fetchBasket().subscribe();
  }

  logUserInfo() {
    console.log('logging user info:');
    console.log(this.authService.key);
    console.log(this.authService.user);
    console.log(this.basketService.basket);
  }
}
