import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import classes from './cartModal.module.css';

function CartModal({ title, actions, open, onClose, text }) {
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
            <Cart />
            <form method="dialog" className={classes.dialog}>
                {actions}
            </form>
        </dialog>,
        document.getElementById('cartmodal')
    );
};

export default CartModal;
