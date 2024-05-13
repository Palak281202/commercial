import React, { useContext } from 'react'
import CartContext from '../../store/CartHandleStore';
import CheckoutContext from '../../store/CheckoutHandler';
import classes from './Checkout.module.css';
import Input from '../UI/Input';
// import paraClass from '../../supense.module.css';

export default function Checkout() {
  // const Input = lazy(()=>import('../UI/Input'));
  const cartCtx = useContext(CartContext);
  const checkoutCtx = useContext(CheckoutContext);

  // const handleSubmit = (event) => {
  // }
  
  const submitOrderHandlr = (event) => {
    event.preventDefault();
    cartCtx.clearCart();
    checkoutCtx.showSubmitModal();
    console.log(checkoutCtx.progress);
  }
  
  const cancelOrderHandlr = () => {
    checkoutCtx.hideCheckout();
    checkoutCtx.showCart();
    console.log(checkoutCtx.progress);
  }

  const cartTotal = cartCtx.items.reduce((price, item) => price + (item.quantity * item.price), 0);
  return (
    <div>
      <form onSubmit={submitOrderHandlr}
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
          <button className={classes.button} onClick={cancelOrderHandlr}>Close</button>
          <button className={classes.button} onClick={submitOrderHandlr}>Submit</button>
        </p>
      </form>
    </div>
  )
}
