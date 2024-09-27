export class CanvasSnapshot {
  private content: string;
  private color: string;
  private border: string;

  constructor(content: string, color: string, border: string) {
    this.content = content;
    this.color = color;
    this.border = border;
  }

  public getContent() {
    return this.content;
  }

  public getColor() {
    return this.color;
  }

  public getBorder() {
    return this.border;
  }
}
