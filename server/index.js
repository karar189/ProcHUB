import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import HomeRouter from "./routes/homeRoute.js";
import UserRouter from "./routes/authRouter.js";
import ProjectRouter from "./routes/projectRoute.js";

//db connection import
import mongooseConnection from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongodb connection
mongooseConnection();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/", HomeRouter);
app.use("/users/project", ProjectRouter);
app.use("/users", UserRouter);
// app.use('/reset', ResetRouter)

// custom middleware
app.use(notFound);
app.use(errorHandler);


//Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
