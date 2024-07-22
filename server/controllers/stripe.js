import Stripe from "stripe";
import Transaction from "../models/transaction.js";
import { config } from "../config/appConfig.js";
import { getEnvVariable } from "../utils/index.js";
import { success } from "../utils/response.js";

const stripe = new Stripe(
  "sk_test_51POayCP5gAI9NfaClujHfCfssJYtu7fQ30mlnZ29Bk2HfoiusIDHCDsJCBATmkMFUHoOgwEMhTWVwSCBvWozdqDn00tnni3x0Z",
  {
    apiVersion: "2024-06-20",
  }
);

export const createPaymentIntent = async (req, res, next) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "inr",
    });

    const newTransact = new Transaction({
      userId: req.id.id,
      planId: req.body.planId,
      paymentIntentId: paymentIntent.id,
      amount: amount,
      status: "initiated",
      // status: paymentIntent.status,
    });
    await newTransact.save();

    console.log("PaymentIntent created:");
    res.status(200).json(
      success(200, {
        clientSecret: paymentIntent.client_secret,
      })
    );
  } catch (error) {
    next(error);
  }
};

export const webhook = async (req, res, next) => {
  console.log("reached webhook");
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    console.log("no sig error");
    return next({ status: 400, message: "webhook error: invalid signature" });
  }

  let event;

  try {
    const endpointSecret = getEnvVariable(config.WEBHOOK_SECRET);
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return next(err);
  }

  let paymentIntent = event.data.object;
  let status = "";
  let receipt = "";
  let paymentIntentId = paymentIntent.id;

  const transact = (await Transaction.findOne) > { paymentIntentId };
  if (transact?.status === "succeeded") {
    res.send();
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      status = paymentIntent.status;
      console.log("in webhook", event.type);
      break;

    case "payment_intent.payment_failed":
      console.log("in webhook", event.type);
      status = "failed";
      console.log(
        `Failure reason: ${paymentIntent.last_payment_error?.message}`
      );
      break;

    case "charge.succeeded":
      let chargeIntent = event.data.object;
      console.log("paymentintent in charge suc: ", paymentIntent);
      receipt = chargeIntent.receipt_url || "";
      console.log("receipt: ", receipt);
      paymentIntentId = chargeIntent.payment_intent;
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  console.log("payment intent: ", paymentIntent);

  if (status) {
    await Transaction.findOneAndUpdate({ paymentIntentId }, { status });
  }
  if (receipt) {
    await Transaction.findOneAndUpdate({ paymentIntentId }, { receipt });
  }

  res.send();
};
