import React from "react";
import Carousel from "@src/components/Carousel/Carousel";
import ProductCard from "@src/components/ProductCard/ProductCard";
import { images } from "@src/assets/images";
import styles from "./Home.module.scss";

function Home() {
  const localProductsData = {
    id: 1,
    title: "Coming Soon",
    description:
      "We launched this premium product to make you feel special at parties",
    price: 2500,
    discountPercentage: 0,
    rating: 5,
    stock: 1,
    brand: "Premium",
    category: "cosplay",
    thumbnail: "...",
    images: [images.home[0].src, images.home[0].src, images.home[0].src],
  };

  return (
    <>
      <div className={styles.row}>
        <Carousel images={images.carousel} />
      </div>{" "}
      <div className={styles.row}>
        <ProductCard product={localProductsData} />
      </div>
    </>
  );
}

export default Home;
