import express from "express";
import {
  getProjects,
  getProjectsById,
  postProjects,
  patchProjects,
  deleteProjects,
  getUpdateProjects,
} from "../controller/ProjectsController.js";
import authMiddleware from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectsById);
router.post("/", authMiddleware, postProjects);
router.get("/:id", authMiddleware, getUpdateProjects);
router.put("/:id", authMiddleware, patchProjects);
router.delete("/:id", authMiddleware, deleteProjects);

export default router;
