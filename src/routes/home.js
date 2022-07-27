import express from "express";
import CTRL from "../C/home.ctrl.js";

const router = express.Router();

router.get("/", CTRL.home);
router.get("/login", CTRL.login);

export default router;
