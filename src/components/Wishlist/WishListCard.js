import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import classes from './WishlistCard.module.css'
import CartContext from '../../store/CartHandleStore';
import WishListContext from '../../store/WishListHandleStore';

export default function WishListCard({ item }) {
    const cartCtx = useContext(CartContext);
    const wishlistctx = useContext(WishListContext);
    const addItemHandler = () => {
        cartCtx.addItem(item);
    }

    const removeIteminWishlistHandler = () => {
        wishlistctx.addItemsInWishList(item);
    }

    return (
        <div>
            <li key={item.id} className={classes.li}>
                <Link>
                    <div className={classes.flex}>
                        <div>
                            <img src={item.image}
                                alt={item.title}
                                className={classes.img}
                            />
                        </div>
                        <div>
                            <h1
                                className={classes.h1}
                            >{item.title}</h1>
                            <h3
                                className={classes.h3}
                            >₹ {item.price}</h3>
                        </div>
                        <div className={classes.buttons}>
                            <button className={classes.button} onClick={addItemHandler}>Add to Cart 🛒</button>
                            <button className={classes.button} onClick={removeIteminWishlistHandler}> Remove from Wishlist</button>
                        </div>
                    </div>
                </Link>
            </li>
        </div>
    )
}
