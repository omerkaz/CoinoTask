import React from "react";
import styles from "./ProductCard.module.scss";
import { images } from "@assets/images/index";
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img src={images.home[0].src} height="420" width="327" />
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
