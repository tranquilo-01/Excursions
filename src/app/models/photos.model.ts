export class Photos {
  id: number;
  urls: string[];
  constructor(id: number, urls: string[]) {
    this.id = id;
    this.urls = urls;
  }
}
