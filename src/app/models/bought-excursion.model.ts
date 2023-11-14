export class BoughtExcursion {
  name: string;
  startDate: string;
  endDate: string;
  placesReserved: number;
  unitPrice: number;
  boughtDate: string;

  constructor(
    name: string,
    startDate: string,
    endDate: string,
    placesReserved: number,
    unitPrice: number,
    boughtDate: string
  ) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.placesReserved = placesReserved;
    this.unitPrice = unitPrice;
    this.boughtDate = boughtDate;
  }
}
