import React from "react";
import Carousel from "@src/components/Carousel/Carousel";
import ProductCard from "@src/components/ProductCard/ProductCard";
import { images } from "@src/assets/images";
import styles from "./Home.module.scss";
function Home() {
  return (
    <>
      <div className={styles.row}>
        <Carousel images={images.carousel} />
      </div>{" "}
      <div className={styles.row}>
        <ProductCard />
      </div>
    </>
  );
}

export default Home;
