import React, { Suspense, lazy, useContext } from 'react'
import WishListContext from '../../store/WishListHandleStore'
import classes from './Wishlist.module.css';
// import WishListCard from './WishListCard';
import wishlistimage from '../../assets/empty_wishlist.svg';
import paraClass from '../../supense.module.css';

export default function Wishlist() {
    const WishListCard = lazy(()=>import('./WishListCard'))
    const wishlistCtx = useContext(WishListContext);
    if(wishlistCtx.items.length === 0){
        return (<><h2 className={classes.noitems}>No items in the Wishlist!</h2>
        <img src={wishlistimage} alt="" className={classes.img}/></>);
    }
    return (
        <div>
            <ul className={classes.ul}>
                {wishlistCtx.items.map((item) => {
                    return <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><WishListCard item={item} /></Suspense>
                }
                )}
            </ul>
        </div>
    )
}
