export class ExcFilterData {
  title: string;
  countries: string[] = [];
  startDate: string;
  endDate: string;
  minPeople: number;
  maxPeople: number;
  minPrice: number;
  maxPrice: number;

  constructor() {
    this.countries = [];
    this.endDate = '';
    this.maxPeople = -1;
    this.maxPrice = -1;
    this.minPeople = -1;
    this.minPrice = -1;
    this.startDate = '';
    this.title = '';
  }
}
