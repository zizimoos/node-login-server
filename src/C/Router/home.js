import express from "express";
import CTRL from "../home.ctrl.js";

const router = express.Router();

router.get("/", CTRL.render.home);
router.get("/login", CTRL.render.login);
router.get("/register", CTRL.render.register);

router.post("/login", CTRL.process.login);
// router.post("/register", CTRL.process.register);

export default router;
