import IFileWriter from "./Interfaces";

export default class Writer {
  protected writer : IFileWriter;
  constructor(writer: IFileWriter) {
    this.writer = writer;
  }

  write(filepath: string): boolean {
    return this.writer.write(filepath);
  }
}
