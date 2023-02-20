import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@src/types";
interface FavoritesPageState {
  products: Product[];
}
const initialState: FavoritesPageState = {
  products: [],
};
const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addProductToFavorites: (state, action: { payload: Product }) => {
      // Check if the product already exists in the state
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      // If the product does not exist in the state, add it
      if (productIndex === -1) {
        state.products = [...state.products, action.payload];
      }
    },
    removeProductFromFavorites: (state, action) => {
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    },
  },
});

export const { addProductToFavorites, removeProductFromFavorites } =
  slice.actions;
export default slice.reducer;
