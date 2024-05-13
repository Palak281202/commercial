import React, { Suspense, lazy, useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './mainNavigation.module.css'
// import CartModal from '../Cart/CartModal';
import CartContext from '../../store/CartHandleStore';
import CheckoutContext from '../../store/CheckoutHandler';
// import CheckOutModal from '../Checkout/CheckoutModal';
// import SubmitModal from '../submit/SubmitModal';
import paraClass from '../../supense.module.css';

export default function MainNavigation() {
    const CartModal = lazy(()=>import('../Cart/CartModal'));
    const CheckOutModal = lazy(()=>import('../Checkout/CheckoutModal'));
    const SubmitModal = lazy(()=>import('../submit/SubmitModal'));
    
    const cartCtx = useContext(CartContext);
    let cssClasses = classes.logoClass;
    const modal = useRef();
    const [text, setText] = useState('🔆Light mode');
    const checkOutCtx = useContext(CheckoutContext);
    const handleopenCart = () => {
        checkOutCtx.showCart();
    }
    const handleCloseCart = () => {
        checkOutCtx.hideCart();
    }
    const handleOpenCheckout = () => {
        checkOutCtx.showCheckout();
    }
    const handleCloseCheckout = () => {
        checkOutCtx.hideCheckout();
    }
    const darkmodeHandler = () => {
        if(text === '🔆Light mode'){
            setText('☀ Dark Mode')
        }
        else{
            setText('🔆Light mode')
        }
    }
    const totalItemsInCart = cartCtx.items.reduce((totalItems, item) => totalItems + item.quantity, 0)
    let modalActions = <button className={classes.button} onClick={handleCloseCart}>Close</button>

    if (totalItemsInCart > 0) {
        modalActions = <div>
            <button className={classes.button} onClick={handleCloseCart}>Close</button>
            <button className={classes.button} onClick={handleOpenCheckout}>Proceed</button>
        </div>
    }


    return (
        <div>
            <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><CartModal
                text = {text}
                ref={modal}
                title="Your Cart"
                actions={modalActions}
                open={checkOutCtx.progress === 'cart'}
                onClose={handleCloseCart}
            /></Suspense>
            <Suspense><CheckOutModal
                open={checkOutCtx.progress === 'checkout'}
                onClose={handleCloseCheckout}
            /></Suspense>
            <Suspense><SubmitModal
                open={checkOutCtx.progress === 'submit'}
            /></Suspense>
            <ul className={classes.ul}>
                <li className={cssClasses}>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        GlitzGrove
                    </NavLink>
                </li>
                <li>
                    <hr />
                </li>
                {/* <li className={classes.li}>
                    <NavLink
                        to='/becomesupplier'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        Become A Supplier
                    </NavLink>
                </li>
                <li>
                    <hr />
                </li>
                <li className={classes.li}>
                    <NavLink
                        to='/profile'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        Your Profile
                    </NavLink>
                </li> */}
                <li className={classes.li}>
                    <NavLink
                        to='/wishlist'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        ♡ Wishlist
                    </NavLink>
                </li>
                <li>
                    <button className={classes.cartButton} onClick={handleopenCart}>🛒Cart ({totalItemsInCart})</button>
                </li>
                <li>
                    <button className={classes.darkButton} onClick={darkmodeHandler}>{text}</button>
                </li>
            </ul>
        </div>
    )
}
