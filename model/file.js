import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  originalName: String,
  storedName: String,
  path: String,
  size: Number,
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

const File = mongoose.model("File", fileSchema);
export default File;
