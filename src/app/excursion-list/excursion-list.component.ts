import { Component, OnInit } from '@angular/core';
import { ExcFilterData } from '../models/excFilterData.model';
// import data from '../../assets/json/excursions.json';
import { Excursion } from '../models/excursion.model';
import { DBServiceService } from '../services/dbservice.service';
import { ExcursionsData } from '../services/excursions-data.service';

@Component({
  selector: 'app-excursion-list',
  templateUrl: './excursion-list.component.html',
  styleUrls: ['./excursion-list.component.css'],
})
export class ExcursionListComponent {
  excursions: Excursion[] = [];
  filters: ExcFilterData;

  constructor(
    private excursionsData: ExcursionsData,
    private dbService: DBServiceService,
    private filterData: ExcFilterData
  ) {}

  ngOnInit(): void {
    this.excursions = this.excursionsData.excursions;
    this.filters = this.filterData;
  }
}
