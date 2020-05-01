import cors from "cors";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import jobs from "./routes/jobs";
import transactions from "./routes/transactions";
import connectDB from "./config/db";

dotenv.config({ path: "./config/config.env" });
// connectDB();

const app = express();

app.use(cors({ origin: "http://127.0.0.1:8080", optionsSuccessStatus: 200 }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/job", jobs);
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
