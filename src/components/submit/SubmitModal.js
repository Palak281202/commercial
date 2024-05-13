import React from 'react'
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function SubmitModal( {open}) {
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
        <dialog ref={dialog}>
            <h1>Order Submitted!</h1>
            <button>Okay</button>
        </dialog>,
        document.getElementById('submit')
    )
}
