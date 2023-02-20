import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "@src/components/ProductCard/ProductCard";
import styles from "./Cart.module.scss";
import {
  removeProductFromCart,
  updateCartItemQuantity,
} from "@src/store/cart/slice";
import { addProductToFavorites } from "@src/store/favorites/slice";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { Product } from "@src/types";

function Cart() {
  const dispatch = useAppDispatch();
  const cartItemsWithQuantity = useAppSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeProductFromCart(product));
  };
  const handleAddToFavorites = (product: Product) => {
    dispatch(addProductToFavorites(product));
  };
  const handleQuantityChange = (product: Product, value: number) => {
    dispatch(updateCartItemQuantity({ id: product.id, quantity: value }));
  };

  return (
    <div className={styles.cartRow}>
      <div className={styles.productsCol}>
        {cartItemsWithQuantity.map((cartItem) => (
          <ProductCard
            quantity={cartItem.quantity}
            key={cartItem.product.id}
            product={cartItem.product}
            onRemoveFromCart={() => handleRemoveFromCart(cartItem.product)}
            onAddToFavorites={() => handleAddToFavorites(cartItem.product)}
            onQuantityChange={(value: number) =>
              handleQuantityChange(cartItem.product, value)
            }
          />
        ))}
      </div>
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
          <Link to={"/checkout"}>Go to Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
