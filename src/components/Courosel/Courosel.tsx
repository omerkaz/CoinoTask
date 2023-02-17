import React, { useState } from "react";
import styles from "./Carousel.module.scss";

type CarouselProps = {
  images: { id: number; src: string }[];
  text?: string;
};

function Caurosel({ images, text }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <section className={styles.carousel}>
      <div>İmage</div>
      <div>Text</div>
      <div>Navigation
        <button></button>
        <button></button>
      </div>
    </section>
  );
}

export default Caurosel;
