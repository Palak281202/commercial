import { createContext, useReducer } from "react";

const WishListContext = createContext({
    items: [],
    addItemsInWishList: (item) => { },
});

const wishlistReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const alreadyPresentInCartIndex = state.items.findIndex((item) =>
            item.id === action.item.id
        )
        console.log(alreadyPresentInCartIndex);
        const updatedItems = [...state.items];
        if (alreadyPresentInCartIndex === -1) {
            updatedItems.push({ ...action.item });
        }
        else {
            updatedItems.splice(alreadyPresentInCartIndex, 1);
        }

        return { ...state, items: updatedItems };
    }

    return;
}

export const WishListContextProvider = ({ children }) => {
    const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, { items: [] });
    const wishLsitAdd = (item) => {
        dispatchWishlist({ type: 'ADD_ITEM', item });
    }


    const wishlistContext = {
        items: wishlist.items,
        addItemsInWishList: wishLsitAdd
    }

    return (
        <WishListContext.Provider value={wishlistContext}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContext;