import { createContext, useReducer } from "react";

const CartContext = createContext(
    {
        items: [],
        addItem: (item) => { },
        removeItem: (id) => { },
        clearCart: () => { }
    }
);
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        //in case of adding the item two cases are possible that the item is already in the list and we only need to update its quantity and secondly we need to add item in the list and set its quantity to 1.
        const alreadyPresentInCartIndex = state.items.findIndex((item) =>
            item.id === action.item.id
        )
        console.log(alreadyPresentInCartIndex);
        const updatedItems = [...state.items];
        if (alreadyPresentInCartIndex > -1) {
            const currentItem = state.items[alreadyPresentInCartIndex]
            const updatedItem = {
                ...currentItem,
                quantity: currentItem.quantity + 1
            }
            updatedItems[alreadyPresentInCartIndex] = updatedItem;
        }
        else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        //for removing an item from the list we need not to check whether an item is present or not because we will be able to remove an item only if it is present. There will again be two cases one in which the quantity of item is greater than one then in that case we only need to decrease the quantity of the item and if the quantity is equal to one then we have to remove the entire list item from the list.
        const alreadyPresentInCartIndex = state.items.findIndex((item) =>
            item.id === action.id
        );
        const updatedItems = [...state.items];
        const currentItem = state.items[alreadyPresentInCartIndex];
        if (currentItem.quantity === 1) {
            updatedItems.splice(alreadyPresentInCartIndex, 1);
        }
        else {
            const updatedItem = {
                ...currentItem,
                quantity: currentItem.quantity - 1
            }

            updatedItems[alreadyPresentInCartIndex] = updatedItem;
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] }
    }

    return;
}
export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
    const addItemFunction = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }
    const removeItemFunction = (id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }
    const clearCartFunction = () => {
        dispatchCartAction({ type: 'CLEAR_CART' });
    }
    const cartContext = {
        items: cart.items,
        addItem: addItemFunction,
        removeItem: removeItemFunction,
        clearCart: clearCartFunction
    }

    console.log(cartContext);
    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartContext;