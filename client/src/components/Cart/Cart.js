import React, { useContext, useState } from 'react'
import CartContext from '../../store/CartHandleStore'
import classes from './Cart.module.css';
import { useSendData } from "../../helper/util";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const sendData = useSendData();
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);
  const totalPrice = cartCtx.items.reduce((price, item) => price + (item.quantity * item.price), 0);

  const addItemHandler = async (item) => {
    try {
      const data = {
        id: item.id, 
        price: item.price,
        quantity: item.quantity,
      }
      const response = await sendData("POST", "add-item", true, data);
      setQuantity(response.item.quantity);
      setItems(response.itemsArr);
    } catch (error) {
      throw error;
    }
  }

  const deleteItemHandler = (id) => {
    cartCtx.removeItem(id);
  }

  let cartContent = <p className={classes.p}>
    Total:{totalPrice}
  </p>

  if (totalPrice === 0) {
    cartContent = <p className={classes.p}>
      No items in the cart yet. 🛒
    </p>
  }

  return (
    <div>
      <ul className={classes.ul}>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id} className={classes.li}>
              <div>
                <h4>{item.title} - </h4>
              </div>
              <div className={classes.qp}>
                <p>{item.quantity} X ₹{item.price}</p>
              </div>
              <div>
                <button onClick={() => addItemHandler(item)} className={classes.button}>+</button>
                <span>{quantity}</span>
                <button onClick={() => deleteItemHandler(item.id)} className={classes.button}>-</button>
              </div>
            </li>
          )
        })}
      </ul>
      <div>
        {cartContent}
      </div>
    </div>
  )
}
