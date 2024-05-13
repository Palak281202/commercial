import { createContext, useState } from "react";

const CheckoutContext = createContext({
    progress:'',
    showCart: ()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{},
    showSubmitModal:()=>{},
    hideSubmitModal:()=>{}
});

export const CheckoutContextProvider=({children})=>{
    const [userProgress , setUserProgress] = useState('');

    const showCart=()=>{
        setUserProgress('cart');
    }

    const hideCart=()=>{
        setUserProgress('');
    }

    const showCheckout=()=>{
        setUserProgress('checkout');
    }

    const hideCheckout=()=>{
        setUserProgress('');
    }

    const showSubmitModal=()=>{
        setUserProgress('submit');
    }

    const hideSubmitModal=()=>{
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showSubmitModal,
        hideSubmitModal
    }
    return(
        <CheckoutContext.Provider value={userProgressCtx}>{children}</CheckoutContext.Provider>
    );
}

export default CheckoutContext;