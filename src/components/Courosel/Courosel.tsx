import React from "react";
import styles from "./Carousel.module.scss";

type CarouselProps = {
  images: { id: number; src: string }[];
  text?: string;
};

function Caurosel({ images, text }: CarouselProps) {
  return <div className={styles.carousel}>Caurosel</div>;
}

export default Caurosel;
