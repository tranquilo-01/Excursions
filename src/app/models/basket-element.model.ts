export class BasketElement {
  name: string;
  startDate: string;
  endDate: string;
  placesReserved: number;
  unitPrice: number;

  constructor(
    name: string,
    startDate: string,
    endDate: string,
    placesReserved: number,
    unitPrice: number
  ) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.placesReserved = placesReserved;
    this.unitPrice = unitPrice;
  }
}
