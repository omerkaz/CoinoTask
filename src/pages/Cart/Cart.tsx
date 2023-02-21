import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@src/components/ProductCard/ProductCard";
import styles from "./Cart.module.scss";
import {
  updateCartItemQuantity,
  getTotalPrice,
  removeProductFromCart,
} from "@src/store/cart/slice";
import { addProductToFavorites } from "@src/store/favorites/slice";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { Product } from "@src/types";
import { useTranslation } from "react-i18next";
import Modal from "@src/components/Modal/Modal";

function Cart() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProductInFavorites, setIsProductInFavorites] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartItemsTotalPrice = useAppSelector(getTotalPrice);
  const favoritesProducts = useAppSelector((state) => state.favorites.products);

  // check favorite for decide modal buttons
  const checkFavorites = (product: Product) => {
    return favoritesProducts.some((p) => p.id === product.id);
  };
  const handleRemoveFromCart = (product: Product) => {
    setSelectedProduct(product);
    setIsProductInFavorites(checkFavorites(product));
    setIsModalVisible(true);
  };

  // Global state logic
  const handleAddToFavorites = (product: Product) => {
    dispatch(addProductToFavorites(product));
  };
  const handleQuantityChange = (product: Product, value: number) => {
    dispatch(updateCartItemQuantity({ id: product.id, quantity: value }));
  };

  return (
    <div className={styles.cartRow}>
      {/* TODO: MODAL CAN BE WRITTEN MORE SOLID */}
      {isModalVisible ? (
        <Modal>
          {isProductInFavorites ? (
            <button
              onClick={() => {
                dispatch(removeProductFromCart(selectedProduct));
                setIsModalVisible(false);
              }}
            >
              {t("modal.removeCart")}
            </button>
          ) : (
            <div>
              <button
                onClick={() => {
                  dispatch(removeProductFromCart(selectedProduct));
                  setIsModalVisible(false);
                }}
              >
                {t("modal.removeCart")}
              </button>
              <button
                onClick={() => {
                  if (selectedProduct) {
                    dispatch(removeProductFromCart(selectedProduct));
                    dispatch(addProductToFavorites(selectedProduct));
                  }
                  setIsModalVisible(false);
                }}
              >
                {t("modal.removeCartAndAddFavorites")}
              </button>
            </div>
          )}
        </Modal>
      ) : undefined}
      {/* PRODUCTS */}
      <div className={styles.productsCol}>
        {cartItems.length === 0 ? (
          <h3 className={styles.cartInfoText}>Sepette ürün bulunmamaktadır</h3>
        ) : (
          cartItems.map((cartItem) => (
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
          ))
        )}
      </div>
      {/* TODO: SUMMARY CAN BE SEPARATED AS A REUSABLE COMPONENT, ALSO USED IN CHECKOUT PAGE */}
      <div className={styles.summaryCol}>
        <div className={styles.summaryHeaderWrap}>
          <h2>{t("cart.summary")}</h2>
        </div>
        <div className={styles.summaryShippingInfoWrap}>
          <span>{t("cart.shipping")}</span>
          <span>Gratis</span>
        </div>
        <div className={styles.summaryAmountInfoWrap}>
          <span>{t("cart.total-amount")}</span>
          <span>{cartItemsTotalPrice} $</span>
        </div>
        <div className={styles.summaryButtonWrap}>
          <Link to={"/checkout"}>{t("cart.go-to-checkout")}</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
