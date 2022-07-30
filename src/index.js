import express from "express";
import cors from "cors";
import path from "path";

import homeRouter from "./C/Router/home.js";

const app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.static(`${path.resolve()}/public`));

app.set("view engine", "ejs");
app.set("views", "./src/V/views");

app.use("/", homeRouter);

export default app;
