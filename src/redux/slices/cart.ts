import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  productId: number,
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push({
        productId: action.payload,
        quantity: 1
      })
    },
    removeItem: (state) => {
      // NYI
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer