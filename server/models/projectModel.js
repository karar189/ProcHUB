import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  username: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
