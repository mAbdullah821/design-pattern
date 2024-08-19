export class NewsLetter {
  private readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  public getTitle() {
    return this.title;
  }
}
