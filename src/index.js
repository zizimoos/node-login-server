import express from "express";
import cors from "cors";

import homeRouter from "./Router/home.js";

const app = express();
app.use(cors("*"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/V/views");

app.use("/", homeRouter);

export default app;
