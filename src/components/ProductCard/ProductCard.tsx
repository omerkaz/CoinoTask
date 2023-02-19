import React from "react";
import styles from "./ProductCard.module.scss";
import { ProductCardProps } from "@src/types";

function ProductCard({ product }: ProductCardProps) {
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
        <div className={styles.productPriceBtn}>
          <p>
            <span>
              {product.price -
                (product.price * product.discountPercentage) / 100}
            </span>
            $
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
