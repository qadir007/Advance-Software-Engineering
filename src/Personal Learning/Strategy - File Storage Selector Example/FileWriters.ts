import IFileWriter from "./Interfaces";

export class AWSFileWriter implements IFileWriter {
  write() {
    console.log("Writing File to AWS S3");
    return true;
  }
}

export class DiskFileWriter implements IFileWriter {
  write(filepath: string) {
    console.log("Writing File to Disk", filepath);
    return true;
  }
}
