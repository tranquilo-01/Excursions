import { Component } from '@angular/core';
import { BoughtFilterService } from 'src/app/services/bought-filter.service';

@Component({
  selector: 'app-bought-filter',
  templateUrl: './bought-filter.component.html',
  styleUrls: ['./bought-filter.component.css'],
})
export class BoughtFilterComponent {
  constructor(private boughtFilterService: BoughtFilterService) {}

  statusToggled(status: string) {
    if (this.boughtFilterService.statuses.includes(status)) {
      let idx = this.boughtFilterService.statuses.indexOf(status);
      this.boughtFilterService.statuses.splice(idx, 1);
    } else {
      this.boughtFilterService.statuses.push(status);
    }
  }
}
