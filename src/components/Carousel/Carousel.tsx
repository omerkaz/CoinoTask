import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
type CaurouselProps = {
  images: { id: number; src: string }[];
  text?: string;
};

function Carousel({ images, text }: CaurouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevValue) =>
        prevValue === images.length - 1 ? 0 : prevValue + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <div className={styles.carousel}>
      <div className={styles.image}>
        <img src={images[currentImage].src} />
        {text ? <div>Text</div> : undefined}
      </div>
      <div className={styles.navigation}>
        <button className={styles.button} onClick={handleNextClick}>
          <FaArrowCircleLeft size={"30"} />
        </button>
        <button className={styles.button} onClick={handlePrevClick}>
          <FaArrowCircleRight size={"30"} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
