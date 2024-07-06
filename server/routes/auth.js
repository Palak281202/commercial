import express from "express";
import {login, register} from "../controllers/authentications.js";
const authenticationRoute = express.Router();
import { ValidationMiddleware } from "../middlewares/validation.js";
import { registerValidationSchema } from "../validations/schemas.js";
import { loginValidationSchema } from "../validations/schemas.js";

authenticationRoute.post('/login', ValidationMiddleware(loginValidationSchema), login);
authenticationRoute.post('/register', ValidationMiddleware(registerValidationSchema), register);

export default authenticationRoute;