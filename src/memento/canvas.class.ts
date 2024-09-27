import { CanvasSnapshot } from './canvas-snapshot.class';

export class Canvas {
  private content: string;
  private color: string;
  private border: string;

  constructor() {
    this.content = '';
    this.color = '';
    this.border = '';
  }
  //--------------------------------------------------------------------------------------------------------------

  public save(): CanvasSnapshot {
    return new CanvasSnapshot(this.content, this.color, this.border);
  }

  //--------------------------------------------------------------------------------------------------------------

  public restore(memento: CanvasSnapshot): void {
    this.content = memento.getContent();
    this.color = memento.getColor();
    this.border = memento.getBorder();
  }

  //--------------------------------------------------------------------------------------------------------------

  public doSomething(): void {
    this.content = this.generateRandomString(20);
    this.color = this.generateRandomString(5);
    this.border = this.generateRandomString(2);
  }

  //--------------------------------------------------------------------------------------------------------------

  public print(): void {
    const data = {
      content: this.content,
      color: this.color,
      border: this.border,
    };

    console.log(data, '\n');
  }

  //--------------------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------------

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }

  //--------------------------------------------------------------------------------------------------------------
}
