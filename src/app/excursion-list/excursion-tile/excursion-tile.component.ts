import { Component, Input } from '@angular/core';
import { Excursion } from 'src/app/models/excursion.model';
import { BasketService } from 'src/app/services/basket.service';
import { BoughtExcursionsService } from 'src/app/services/bought-excursions.service';
import { ExcursionsData } from 'src/app/services/excursions-data.service';

@Component({
  selector: 'app-excursion-tile',
  templateUrl: './excursion-tile.component.html',
  styleUrls: ['./excursion-tile.component.css'],
})
export class ExcursionTileComponent {
  @Input() excursion: Excursion;
  @Input() id: number;
  placesChosen: number = 0;
  numberOfPlaces: number;

  constructor(
    private excursionsData: ExcursionsData,
    private basket: BasketService,
    private bought: BoughtExcursionsService
  ) {}

  onInit() {
    this.numberOfPlaces = this.excursion.numberOfPlaces;
  }

  onAddPlace() {
    this.placesChosen++;
  }

  onRemovePlace() {
    this.placesChosen--;
  }

  getBorder() {
    if (this.excursion.price == this.excursionsData.getLowestPrice()) {
      return '5px solid green';
    } else if (this.excursion.price == this.excursionsData.getHighestPrice()) {
      return '5px solid red';
    } else {
      return 'none';
    }
  }

  onDelete() {
    console.log(this.id);
    this.excursionsData.removeExcursion(this.id);
  }

  updateBasket() {
    this.basket.update(this.excursion, this.placesChosen);
    this.numberOfPlaces = this.excursion.numberOfPlaces - this.placesChosen;
  }
}
