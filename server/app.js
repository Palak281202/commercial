import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig.js";
import authenticationRoute from "./routes/auth.js";
 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", authenticationRoute);

app.get("/", (req, res) => {
  res.send("Hello, Node.js + Express!");
});

export default app;
