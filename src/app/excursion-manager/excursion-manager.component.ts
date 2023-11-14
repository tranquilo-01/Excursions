import { Component } from '@angular/core';
import { ExcursionsData } from '../services/excursions-data.service';
import { PhotoResolverService } from '../services/photo-resolver.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-excursion-manager',
  templateUrl: './excursion-manager.component.html',
  styleUrls: ['./excursion-manager.component.css'],
})
export class ExcursionManagerComponent {
  newExcursionFormOpened: boolean = false;

  constructor(
    public excursionsData: ExcursionsData,
    public photosService: PhotosService
  ) {}

  toggleNewExcursionForm() {
    this.newExcursionFormOpened = !this.newExcursionFormOpened;
  }
}
