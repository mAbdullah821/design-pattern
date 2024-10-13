import { IDocument } from './document.interface';
import { IFeatureVisitor } from './feature-visitor.interface';
import { SpreadSheet } from './spread-sheet.class';
import { TextFile } from './text-file.class';

export class TextExtractorVisitor implements IFeatureVisitor {
  constructor() {}

  public visit(document: IDocument) {
    document instanceof TextFile ? this.visitTextFile(document) : this.visitSpreadSheet(document);
  }

  private visitTextFile(textFile: TextFile) {
    console.log(textFile.getData());
  }

  private visitSpreadSheet(spreadSheet: SpreadSheet) {
    console.log(spreadSheet.getData());
  }
}
