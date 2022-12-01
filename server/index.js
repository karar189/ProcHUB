import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

//db connection import
import mongooseConnection from "./config/db.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongodb connection
mongooseConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
