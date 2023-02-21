import React, { useRef } from "react";
import styles from "./ProductCard.module.scss";
import { ProductCardProps } from "@src/types";

function ProductCard({
  product,
  quantity,
  onAddToCart,
  onRemoveFromCart,
  onAddToFavorites,
  onRemoveFromFavorites,
  onQuantityChange,
}: ProductCardProps) {
  const quantityInput = useRef<HTMLInputElement>(null);

  const handleAddToCart = () => {
    onAddToCart && onAddToCart();
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart && onRemoveFromCart();
  };

  const handleAddToFavorites = () => {
    onAddToFavorites && onAddToFavorites();
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites && onRemoveFromFavorites();
  };
  const handleQuantityChange = (value: number) => {
    onQuantityChange && onQuantityChange(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img src={product.images[2]} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productText}>
          <h1>{product.title}</h1>
          <h2>by {product.brand}</h2>
          <p>{product.description}</p>
        </div>
        <div className={styles.productPriceWrap}>
          <span>
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>
          $
        </div>
        <div className={styles.productButtons}>
          {onAddToCart ? (
            <button type="button" onClick={() => handleAddToCart()}>
              Add Cart
            </button>
          ) : (
            <button type="button" onClick={handleRemoveFromCart}>
              Remove Cart
            </button>
          )}
          {onAddToFavorites ? (
            <button type="button" onClick={handleAddToFavorites}>
              Add Favorites
            </button>
          ) : (
            <button type="button" onClick={handleRemoveFromFavorites}>
              Remove Favorites
            </button>
          )}
        </div>
        {onQuantityChange ? (
          <div className={styles.productQuantity}>
            <input
              ref={quantityInput}
              value={quantity}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default ProductCard;
