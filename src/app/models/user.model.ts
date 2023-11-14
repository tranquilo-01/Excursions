import { BasketElement } from './basket-element.model';
import { BoughtExcursion } from './bought-excursion.model';

export class User {
  uid: string | undefined;
  details: UserDetails;
  basket: BasketElement[];
  boughtExcursions: BoughtExcursion[];
  constructor(
    uid: string | undefined,
    details: UserDetails,
    basket: BasketElement[],
    boughtExcursions: BoughtExcursion[]
  ) {
    this.uid = uid;
    this.details = details;
    this.basket = basket;
    this.boughtExcursions = boughtExcursions;
  }
}

export class UserDetails {
  constructor(
    public email: string,
    public admin: boolean,
    public manager: boolean,
    public user: boolean,
    public banned: boolean,
    public persistence: string
  ) {}
}
