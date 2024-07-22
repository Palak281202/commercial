import express from "express";
const cartItemRoute = express.Router();
import { authMiddleware } from "../middlewares/auth.js";
import { addItem, removeItem } from "../controllers/cartItem.js";

cartItemRoute.post('/add-item', authMiddleware, addItem);
cartItemRoute.post('/remove-item', authMiddleware, removeItem);

export default cartItemRoute;