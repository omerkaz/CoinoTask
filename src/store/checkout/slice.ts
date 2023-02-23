import { createSlice } from "@reduxjs/toolkit";
import { CheckoutPageState, CheckoutFormItem } from "@src/types";

const initialState: CheckoutPageState = {
  checkoutForms: [],
};

const slice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addFormValues: (state, action: { payload: CheckoutFormItem }) => {
      state.checkoutForms = [...state.checkoutForms, action.payload];
    },
  },
});

export const { addFormValues } = slice.actions;
export default slice.reducer;
