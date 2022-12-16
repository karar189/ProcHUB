import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  username: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    default: null,
  },
  desc: {
    type: String,
    default: null,
  },
  yt: {
    type: String,
    default: null,
  },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
