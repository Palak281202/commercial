import React, { useEffect } from 'react'
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Checkoutmodal.module.css';
import Checkout from './Checkout';

export default function CheckoutModal({ title, actions, open, onClose }) {
    // const Checkout = lazy(()=>import('./Checkout'));
    const dialog = useRef();
    useEffect(()=>{
        const modal = dialog.current;
        if(open){
            modal.showModal();
        }
        else{
            modal.close();
        }
    },[open]);

    return createPortal(
        <dialog className={classes.modal} ref={dialog} 
        onClose={onClose}
        >
            <h2 className={classes.h2}>{title}</h2>
            <Checkout />
            <form method="dialog" className={classes.dialog}>
                {actions}
            </form>
        </dialog>,
        document.getElementById('checkoutmodal')
    )
};

