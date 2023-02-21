import { createSlice } from "@reduxjs/toolkit";
import { CartPageState, CartItem } from "@src/types";

const initialState: CartPageState = {
  cartItems: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { id } = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      // If the product already exists in the cart, increment its quantity
      if (existingCartItemIndex >= 0) {
        state.cartItems[existingCartItemIndex].quantity++;
      } else {
        // Otherwise, add a new cart item with a quantity of 1
        state.cartItems.push({ id, product: action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      // If the product exists in the cart, remove it
      if (existingCartItemIndex >= 0) {
        state.cartItems.splice(existingCartItemIndex, 1);
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );
      state.cartItems[existingCartItemIndex].quantity = quantity;
    },
  },
});

export const getTotalPrice = (state: { cart: { cartItems: CartItem[] } }) => {
  let totalPrice = 0;
  state.cart.cartItems.map(
    (item: CartItem) => (totalPrice += item.quantity * item.product.price)
  );
  return totalPrice;
};

export const {
  addProductToCart,
  removeProductFromCart,
  updateCartItemQuantity,
} = slice.actions;
export default slice.reducer;
