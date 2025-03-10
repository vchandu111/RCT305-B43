import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";
const initialState:{items:Product[]} = {
    items:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<Product>) => {
            state.items.push(action.payload)
        }
    }

})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer