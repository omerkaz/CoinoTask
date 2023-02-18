import React, { useState } from "react";
import styles from "./Carousel.module.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
type CaurouselProps = {
  images: { id: number; src: string }[];
  text?: string;
};

function Carousel({ images, text }: CaurouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <section className={styles.carousel}>
      <div className={styles.image}>
        <img src={images[currentImage].src} />
        {text ? <div>Text</div> : undefined}
      </div>
      <div className={styles.navigation}>
        <button className={styles.button} onClick={handleNextClick}>
          <FaArrowCircleLeft size={"20"} />
        </button>
        <button className={styles.button} onClick={handlePrevClick}>
          <FaArrowCircleRight size={"20"} />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
