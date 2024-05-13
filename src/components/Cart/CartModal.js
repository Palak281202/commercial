import { Suspense, lazy, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// import Cart from './Cart';
import paraClass from '../../supense.module.css'
import classes from './cartModal.module.css';

function CartModal({ title, actions, open, onClose, text }) {
    const Cart = lazy(()=>import('./Cart'));
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current
        if (open) {
            modal.showModal();
        }
        else {
            modal.close();
        }
    }, [open]);

    return createPortal(
        <dialog className={classes.modal} ref={dialog}
        // onClose={onClose}
        >
            <h2 className={classes.h2}>{title}</h2>
            <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><Cart /></Suspense>
            <form method="dialog" className={classes.dialog}>
                {actions}
            </form>
        </dialog>,
        document.getElementById('cartmodal')
    );
};

export default CartModal;
