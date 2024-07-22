import express from "express";
const wishItemRoute = express.Router();
import { authMiddleware } from "../middlewares/auth.js";
import { addItem } from "../controllers/wishlist.js";

wishItemRoute.post('/add-wish', authMiddleware, addItem);

export default wishItemRoute;