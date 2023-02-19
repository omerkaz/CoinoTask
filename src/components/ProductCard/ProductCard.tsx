import React from "react";
import styles from "./ProductCard.module.scss";

function ProductCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productText}>
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
          <p>
            Harvest Vases are a reinterpretation of peeled fruits and vegetables
            as functional objects. The surfaces appear to be sliced and pulled
            aside, allowing room for growth.{" "}
          </p>
        </div>
        <div className={styles.productPriceBtn}>
          <p>
            <span>78</span>$
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
