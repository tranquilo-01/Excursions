import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Excursion } from '../models/excursion.model';
import { DBServiceService } from './dbservice.service';
import { ExcursionsData } from './excursions-data.service';

@Injectable({
  providedIn: 'root',
})
export class ExcursionsResolverService implements Resolve<Excursion[]> {
  constructor(
    private excursionsData: ExcursionsData,
    private dbService: DBServiceService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Excursion[] | Observable<Excursion[]> | Promise<Excursion[]> {
    let excursions = this.excursionsData.getExcursions();
    if (excursions.length === 0) {
      return this.dbService.fetchExcursions();
    } else {
      return excursions;
    }
  }
}
