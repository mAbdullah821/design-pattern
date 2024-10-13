import { IDocument } from './document.interface';
import { IFeatureVisitor } from './feature-visitor.interface';

export abstract class Document implements IDocument {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  setData(data: string): void {
    this.data = data;
  }

  getData(): string {
    return this.data;
  }

  accept(visitor: IFeatureVisitor): void {
    visitor.visit(this);
  }
}
