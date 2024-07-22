import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig.js";
import authenticationRoute from "./routes/auth.js";
import cartItemRoute from "./routes/cartItem.js";
import stripeRoute from "./routes/stripe.js";
import wishItemRoute from "./routes/wishlist.js";
 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", authenticationRoute);
app.use("/api", cartItemRoute);
app.use("/api", stripeRoute);
app.use("/api",wishItemRoute);

app.get("/", (req, res) => {
  res.send("Hello, Node.js + Express!");
});

export default app;
