import React, { useContext, useState } from "react";
import CartContext from "../../store/CartHandleStore";
import CheckoutContext from "../../store/CheckoutHandler";
import classes from "./Checkout.module.css";
import Input from "../UI/Input";
// import paraClass from '../../supense.module.css';
import { useSendData } from "../../helper/util";
import Payment from "../Payment/Payment";

export default function Checkout() {
  // const Input = lazy(()=>import('../UI/Input'));
  const cartCtx = useContext(CartContext);
  const checkoutCtx = useContext(CheckoutContext);
  const sendData = useSendData();
  const [isModalOpen, setModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    planId: "",
    clientSecret: "",
  });
  const cartTotal = cartCtx.items.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const paymentHandler = async (event) => {
    event.preventDefault();
    cartCtx.clearCart();
    checkoutCtx.showSubmitModal();
    console.log(checkoutCtx.progress);
    try {
      const response = await sendData("POST", "create-payment-intent", true, {
        amount: cartTotal,
      });

      console.log("Payment Intent response:", response);

      if (!response || !response.clientSecret) {
        throw new Error("Client secret not received");
      }

      const { clientSecret } = response;

      setPaymentDetails({ amount: cartTotal, clientSecret });
      setModalOpen(true);
    } catch (error) {
      console.error("Error subscribing to plan:", error);
    }
  };

  const cancelOrderHandlr = () => {
    checkoutCtx.hideCheckout();
    checkoutCtx.showCart();
    console.log(checkoutCtx.progress);
  };

  return (
    <div>
      <form
        onSubmit={paymentHandler}
        // onClose={handleClose}
      >
        <h2 className={classes.h2}>Check out</h2>
        <p className={classes.h2}>Total price = {cartTotal}</p>

        <Input title="Full Name" type="text" />
        <Input title="Phone number" type="text" />
        <Input title="Street" type="text" />

        <div>
          <Input title="Postal Code" type="text" />
          <Input title="City" type="text" />
        </div>
        <p>
          <button className={classes.button} onClick={cancelOrderHandlr}>
            Close
          </button>
          <button className={classes.button} onClick={paymentHandler}>
            Pay
          </button>
        </p>
      </form>
      {isModalOpen && (
        <Payment
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          amount={paymentDetails.amount}
          planId={paymentDetails.planId}
          clientSecret={paymentDetails.clientSecret}
        />
      )}
    </div>
  );
}
