import { Product, UserInformationFormValues } from "./components";

// Favorites slice
export interface FavoritesPageState {
  products: Product[];
}

// Cart slice
export interface CartPageState {
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

// Checkout slice
export interface CheckoutPageState {
  checkoutForms: CheckoutFormItem[];
}

export interface CheckoutFormItem {
  id: number;
  label: string;
  formValues: UserInformationFormValues;
}
