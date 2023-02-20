import React from "react";
import styles from "./ProductCard.module.scss";
import { ProductCardProps } from "@src/types";

function ProductCard({
  product,
  onAddToCart,
  onRemoveFromCart,
  onAddToFavorites,
  onRemoveFromFavorites,
  onQuantityChange,
}: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart && onAddToCart(product);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart && onRemoveFromCart(product);
  };

  const handleAddToFavorites = () => {
    onAddToFavorites && onAddToFavorites(product);
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites && onRemoveFromFavorites(product);
  };
  const handleQuantityChange = (value: number) => {
    onQuantityChange && onQuantityChange(value, product);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img src={product.images[2]} height="420" width="327" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productText}>
          <h1>{product.title}</h1>
          <h2>by {product.brand}</h2>
          <p>{product.description}</p>
        </div>
        <div>
          <span className={styles.productPriceWrap}>
            {product.price - (product.price * product.discountPercentage) / 100}
          </span>
          $
        </div>
        <div className={styles.productPriceBtn}>
          {onAddToCart ? (
            <button type="button" onClick={handleAddToCart}>
              buy now
            </button>
          ) : (
            <button type="button" onClick={handleRemoveFromCart}>
              buy now
            </button>
          )}
          {onAddToFavorites ? (
            <button type="button" onClick={handleAddToFavorites}>
              buy now
            </button>
          ) : (
            <button type="button" onClick={handleRemoveFromFavorites}>
              buy now
            </button>
          )}
          {onQuantityChange ? (
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
              defaultValue={1}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
            />
          ) : undefined}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
