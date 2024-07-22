import express from 'express';
import { createPaymentIntent, webhook } from '../controllers/stripe.js';
import { authMiddleware } from '../middlewares/auth.js';
import { paymentValidationSchema } from '../validations/schemas.js';
import { ValidationMiddleware } from '../middlewares/validation.js';

const stripeRoute = express.Router();

stripeRoute.post('/create-payment-intent', authMiddleware, ValidationMiddleware(paymentValidationSchema), createPaymentIntent);
stripeRoute.post('/webhook', webhook);

export default stripeRoute;
