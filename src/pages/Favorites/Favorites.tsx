import React from "react";
import styles from "./Favorites.module.scss";
import ProductCard from "@src/components/ProductCard/ProductCard";
import { addProductToCart } from "@src/store/cart/slice";
import { removeProductFromFavorites } from "@src/store/favorites/slice";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { Product } from "@src/types";

function Favorites() {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector((state) => state.favorites.products);
  const handleAddToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };
  const handleRemoveFromFavorites = (product: Product) => {
    dispatch(removeProductFromFavorites(product.id));
  };
  return (
    <div className={styles.favoritesRow}>
      {favoriteProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemoveFromFavorites={() => handleRemoveFromFavorites(product)}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
}

export default Favorites;
