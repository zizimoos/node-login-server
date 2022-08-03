import express from "express";
import CTRL from "../home.ctrl.js";

const router = express.Router();

router.get("/", CTRL.render.home);
router.get("/login", CTRL.render.login);
router.post("/login", CTRL.process.login);

export default router;
