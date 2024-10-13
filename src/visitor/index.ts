import { SpreadSheet } from './spread-sheet.class';
import { TextExtractorVisitor } from './text-extractor-visitor.class';
import { TextFile } from './text-file.class';
import { WordCounterVisitor } from './word-counter-visitor.class';

export default () => {
  const textFile = new TextFile('Hello World, How Are You?');
  const spreadSheet = new SpreadSheet('Hello,World,How,Are,You?');

  const textExtractorVisitor = new TextExtractorVisitor();
  const wordCounterVisitor = new WordCounterVisitor();

  textFile.accept(textExtractorVisitor);
  textFile.accept(wordCounterVisitor);

  console.log('-----------------------------------------');

  spreadSheet.accept(textExtractorVisitor);
  spreadSheet.accept(wordCounterVisitor);
};
