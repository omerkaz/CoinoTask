import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducers from "./cart/slice";
import favoritesReducers from "./favorites/slice";
import checkoutReducers from "./checkout/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducers = combineReducers({
  cart: cartReducers,
  favorites: favoritesReducers,
  checkout: checkoutReducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
