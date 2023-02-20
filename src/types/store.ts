import { Product } from "./components";

// Favorites slice
export interface FavoritesPageState {
  products: Product[];
}

// Cart slice
export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface CartPageState {
  cartItems: CartItem[];
}
