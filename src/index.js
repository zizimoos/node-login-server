import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import fs from "fs";

import homeRouter from "./C/Router/home.js";

const app = express();
const accessLogStream = fs.createWriteStream(
  `${path.resolve()}/log/access.log`,
  { flags: "a" }
);

app.set("view engine", "ejs");
app.set("views", "./src/V/views");

app.use(cors("*"));
app.use(express.json());
app.use(express.static(`${path.resolve()}/public`));
app.use(morgan("dev"));
app.use(
  morgan("[:date[web]] :method :url :status", { stream: accessLogStream })
);

app.use("/", homeRouter);

export default app;
