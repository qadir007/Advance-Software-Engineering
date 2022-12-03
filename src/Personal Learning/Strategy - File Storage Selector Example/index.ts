import { AWSFileWriter, DiskFileWriter } from "./FileWriters";
import Writer from "./Writer";

const strategyTesting = () => {
  let size = 1000;

  if (size < 1000) {
    const writer = new Writer(new DiskFileWriter());
    writer.write("file path comes here");
  } else {
    const writer = new Writer(new AWSFileWriter());
    writer.write("writing the file to the cloud");
  }
};

export default strategyTesting;
