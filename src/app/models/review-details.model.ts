export class ReviewDetails {
  nick: string;
  excursionName: string;
  review: string;
  date: string;

  constructor(
    nick: string,
    excursionName: string,
    review: string,
    date: string
  ) {
    this.nick = nick;
    this.excursionName = excursionName;
    this.review = review;
    this.date = date;
  }
}
