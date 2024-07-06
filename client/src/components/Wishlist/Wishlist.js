import React, { useContext } from 'react'
import WishListContext from '../../store/WishListHandleStore'
import classes from './Wishlist.module.css';
import WishListCard from './WishListCard';
import wishlistimage from '../../assets/empty_wishlist.svg';

export default function Wishlist() {
    const wishlistCtx = useContext(WishListContext);
    if(wishlistCtx.items.length === 0){
        return (<><h2 className={classes.noitems}>No items in the Wishlist!</h2>
        <img src={wishlistimage} alt="" className={classes.img}/></>);
    }
    return (
        <div>
            <ul className={classes.ul}>
                {wishlistCtx.items.map((item) => {
                    return <WishListCard item={item} />
                }
                )}
            </ul>
        </div>
    )
}
