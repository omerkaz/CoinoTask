import React from "react";
// import ProductCard from "@src/components/ProductCard/ProductCard";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <div className={styles.cartRow}>
      <div className={styles.productsCol}>Products</div>
      <div className={styles.summaryCol}>
        <div className={styles.summaryHeaderWrap}>
          <h2>Summary</h2>
        </div>
        <div className={styles.summaryShippingInfoWrap}>
          <span>Shipping</span>
          <span>Gratis</span>
        </div>
        <div className={styles.summaryAmountInfoWrap}>
          <span>Total Amount</span>
          <span>0$</span>
        </div>
        <div className={styles.summaryButtonWrap}>
          <button>Go to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
