import Mongoose from "mongoose";
import Project from "../models/projectModel.js";
import { v4 as uuidv4 } from "uuid";
import user from "../models/userModel.js";

// @route: GET users/Projects
//@puropose : get all Projects from db for single user
export const getProjects = async (req, res, next) => {
  try {
    const Projectfetch = await Project.find({
      username: req.user._id,
    }).populate("username");
    res.status(200).json(Projectfetch);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

//@route: POST users/Projects
//@purpose: : Post new Project by user
export const postProjects = async (req, res, next) => {
  const User = await user.findOne({ _id: req.user._id });
  var { title, body } = req.body;
  console.log(req.body);

  const accessToken = uuidv4();

  const newpost = {
    title: title,
    body: body,
    username: User._id,
    accessToken: accessToken,
    isValid: true,
  };

  var newProjects = new Project(newpost);
  try {
    console.log(req.body);
    await newProjects.save();
    res.status(201).json(newProjects);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//@route: GET users/Projects/:id
//@purpose: get details for update
export const getUpdateProjects = async (req, res, next) => {
  const { id: id } = req.params;
  try {
    const updateExistingProjects = await Project.findById(id);
    res.status(200).json(updateExistingProjects);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @route: PATCH users/Projects/:id
// @purpose: PATCH or update the Projects
export const patchProjects = async (req, res) => {
  const { id: id } = req.params;
  const post = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that is Found");

  const updateProjects = await Project.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updateProjects);
};

// @route: DELETE usera/Projects/id
export const deleteProjects = async (req, res) => {
  try {
    const deleteuserProject = await Project.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deleteuserProject);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
