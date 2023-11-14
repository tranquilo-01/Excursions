import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BoughtExcursion } from '../models/bought-excursion.model';
import { BoughtExcursionsService } from './bought-excursions.service';
import { DBServiceService } from './dbservice.service';
import { PhotosService } from './photos.service';

@Injectable({
  providedIn: 'root',
})
export class BoughtResolverService implements Resolve<any[]> {
  constructor(
    private dbService: DBServiceService,
    private boughtService: BoughtExcursionsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | BoughtExcursion[]
    | Observable<BoughtExcursion[]>
    | Promise<BoughtExcursion[]> {
    return this.boughtService.fetchBought();
  }
}
