import { IDocument } from './document.interface';
import { IFeatureVisitor } from './feature-visitor.interface';
import { SpreadSheet } from './spread-sheet.class';
import { TextFile } from './text-file.class';

export class WordCounterVisitor implements IFeatureVisitor {
  constructor() {}

  public visit(document: IDocument) {
    document instanceof TextFile ? this.visitTextFile(document) : this.visitSpreadSheet(document);
  }

  private visitTextFile(textFile: TextFile) {
    console.log('Words Count: ', textFile.getData().split(' ').length);
  }

  private visitSpreadSheet(spreadSheet: SpreadSheet) {
    console.log('Words Count: ', spreadSheet.getData().split(',').length);
  }
}
