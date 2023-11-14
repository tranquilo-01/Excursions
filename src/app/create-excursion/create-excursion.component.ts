import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Excursion } from '../models/excursion.model';
import { Photos } from '../models/photos.model';
import { DBServiceService } from '../services/dbservice.service';
import { ExcursionsData } from '../services/excursions-data.service';

@Component({
  selector: 'app-create-excursion',
  templateUrl: './create-excursion.component.html',
  styleUrls: ['./create-excursion.component.css'],
})
export class CreateExcursionComponent {
  @Output() formControl = new EventEmitter<string>();
  @ViewChild('f') excForm: NgForm;
  createdExcursion: Excursion;
  excursions: ExcursionsData;

  constructor(
    private excursionsData: ExcursionsData,
    private db: DBServiceService
  ) {
    this.excursions = excursionsData;
  }

  onSubmit(form: NgForm) {
    this.createdExcursion = new Excursion(
      -1,
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
      -1,
      this.extractUrls(this.excForm.value.details_image_links)
    );
    this.db.pushNewExcursion(this.createdExcursion, photos);
    this.excursionsData.addExcursion(this.createdExcursion);
    this.excForm.reset();
    this.excursions.formOpen = false;
  }

  onClose() {
    this.excursions.formOpen = false;
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
