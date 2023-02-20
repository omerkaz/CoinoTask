import { configureStore } from "@reduxjs/toolkit";

import cartReducers from "./cart/slice";
import favoritesReducers from "./favorites/slice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedCartReducer = persistReducer(persistConfig, cartReducers);
const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducers
);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    favorites: persistedFavoritesReducer,
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
