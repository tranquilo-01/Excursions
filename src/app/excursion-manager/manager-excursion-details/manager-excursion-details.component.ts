import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Excursion } from 'src/app/models/excursion.model';
import { Photos } from 'src/app/models/photos.model';
import { DBServiceService } from 'src/app/services/dbservice.service';
import { ExcursionsData } from 'src/app/services/excursions-data.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-manager-excursion-details',
  templateUrl: './manager-excursion-details.component.html',
  styleUrls: ['./manager-excursion-details.component.css'],
})
export class ManagerExcursionDetailsComponent {
  @Input() excursion: Excursion;
  @ViewChild('f') excForm: NgForm;
  photostring: string = '';
  createdExcursion: Excursion;

  constructor(
    private excursionsData: ExcursionsData,
    private db: DBServiceService,
    private photoService: PhotosService
  ) {}

  ngOnInit() {
    for (let photo of this.photoService.getPhotos()) {
      if (this.excursion.id == photo.id) {
        for (let url of photo.urls) {
          this.photostring += url + ', \n';
        }
      }
    }
  }

  onUpdate(form: NgForm) {
    this.createdExcursion = new Excursion(
      this.excursion.id,
      this.excForm.value.name,
      this.excForm.value.country,
      this.excForm.value.startDate,
      this.excForm.value.endDate,
      this.excForm.value.price,
      this.excForm.value.numberOfPlaces,
      this.excForm.value.description,
      this.excForm.value.imgLink
    );

    let photos = new Photos(
      this.excursion.id,
      this.extractUrls(this.excForm.value.details_image_links)
    );
    // TODO zmiany widoczne po refreshu
    this.db.updateExcursion(this.createdExcursion);
    this.db.updatePhotos(photos);
    this.excForm.form.markAsPristine();
  }

  extractUrls(str: string): string[] {
    // Use a regular expression to match URLs in the string
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const matches = str.match(urlRegex);
    if (matches) {
      return Array.from(matches);
    } else {
      return [];
    }
  }
}
