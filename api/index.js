import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDb!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json()); //allow json as a input of server
app.use(cookieParser());
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
