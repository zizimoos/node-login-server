import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import homeRouter from "./routes/home.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors("*"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/V/views");

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(` 🟢 Server is running on port ${PORT}`);
});
