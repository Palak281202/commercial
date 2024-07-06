import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './mensethini.module.css'
import CartContext from '../../store/CartHandleStore';
import WishListContext from '../../store/WishListHandleStore';

export default function Card({ item }) {
    const cartCtx = useContext(CartContext);
    const wishlistctx = useContext(WishListContext);
    const [isPresent, setIsPresent ] = useState(false);
    const addItemHandler = () => {
        cartCtx.addItem(item);
    }

    const addIteminWishlistHandler = () => {
        wishlistctx.addItemsInWishList(item);
        setIsPresent((prevvalue)=> !prevvalue);
        console.log(wishlistctx.items)
    }

    
    return (
        <div>
            <li key = {item.id} className={classes.li}>
                <Link>
                    <div>
                        <img src={item.image}
                            alt={item.title}
                            className={classes.img}
                        />
                        <h1
                            className={classes.h1}
                        >{item.title}</h1>
                        <h3
                            className={classes.h3}
                        >₹ {item.price}</h3>
                        <div className={classes.div}>Free Delivery</div>
                        <p
                            className={classes.p}
                        >{item.rating} ★</p>
                    </div>
                    <div className={classes.buttons}>
                        <button className={classes.button} onClick={addItemHandler}>Add to Cart 🛒</button>
                        <button className={classes.button} onClick={addIteminWishlistHandler}>{isPresent ? '❤':'♡'} Wishlist</button>
                    </div>
                </Link>
            </li>
        </div>
    )
}
