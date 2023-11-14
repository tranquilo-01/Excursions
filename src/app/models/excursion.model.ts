export class Excursion {
  id: number;
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  price: number;
  numberOfPlaces: number;
  description: string;
  imgLink: string;

  constructor(
    id: number,
    name: string,
    country: string,
    startDate: string,
    endDate: string,
    price: number,
    numberOfPlaces: number,
    description: string,
    imgLink: string
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
    this.numberOfPlaces = numberOfPlaces;
    this.description = description;
    this.imgLink = imgLink;
  }
}
