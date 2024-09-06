export class Blog {
  private readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  public getTitle() {
    return this.title;
  }
}
