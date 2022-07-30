import express from "express";
import CTRL from "../home.ctrl.js";

const router = express.Router();

router.get("/", CTRL.get.home);
router.get("/login", CTRL.get.login);
router.post("/login", CTRL.post.login);

export default router;
