import { Canvas } from './canvas.class';
import { SnapshotHistory } from './snapshot-history.class';

export default () => {
  const canvas = new Canvas();
  const caretaker = new SnapshotHistory(canvas);

  canvas.doSomething();
  caretaker.backup();
  canvas.print();

  canvas.doSomething();
  caretaker.backup();
  canvas.print();

  caretaker.undo();
  canvas.print();

  caretaker.undo();
  canvas.print();

  caretaker.redo();
  canvas.print();

  caretaker.redo();
  canvas.print();

  caretaker.redo();
  canvas.print();
};
