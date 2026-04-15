import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import candidateRoutes from "./routes/candidateRoutes.js";

const app = express();

/* Middleware */
app.use(express.json()); // read JSON
app.use(cors());         // allow frontend
app.use(helmet());       // security
app.use(morgan("dev"));  // logs

/* Routes */
app.use("/api/candidates", candidateRoutes);

/* MongoDB connection */
mongoose.connect("mongodb://127.0.0.1:27017/candidateDataBase")
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));

/* Start server */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});