import { Canvas } from './canvas.class';
import { CanvasSnapshot } from './canvas-snapshot.class';

export class SnapshotHistory {
  private originator: Canvas;
  private previousHistory: CanvasSnapshot[];
  private nextHistory: CanvasSnapshot[];

  constructor(originator: Canvas) {
    this.originator = originator;
    this.previousHistory = [];
    this.nextHistory = [];

    this.backup();
  }

  public backup(): void {
    this.previousHistory.push(this.originator.save());

    if (this.nextHistory.length) this.nextHistory = [];
  }

  //--------------------------------------------------------------------------------------------------------------

  public undo(): void {
    if (this.previousHistory.length) this.nextHistory.push(this.previousHistory.pop() as CanvasSnapshot);

    if (this.previousHistory.length) this.originator.restore(this.previousHistory.at(-1) as CanvasSnapshot);
  }

  //--------------------------------------------------------------------------------------------------------------

  public redo(): void {
    if (!this.nextHistory.length) return;

    this.previousHistory.push(this.nextHistory.pop() as CanvasSnapshot);
    this.originator.restore(this.previousHistory.at(-1) as CanvasSnapshot);
  }
}
