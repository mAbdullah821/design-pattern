import { IDocument } from './document.interface';

export interface IFeatureVisitor {
  visit: (document: IDocument) => void;
}
