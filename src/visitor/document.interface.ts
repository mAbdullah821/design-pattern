import { IFeatureVisitor } from './feature-visitor.interface';

export interface IDocument {
  data: string;

  setData: (data: string) => void;
  getData: () => string;
  accept: (visitor: IFeatureVisitor) => void;
}
