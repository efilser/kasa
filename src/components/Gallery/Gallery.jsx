import React, { useState } from "react";
import "./Gallery.css";
import leftArrow from "../../assets/left_arrow.svg";
import rightArrow from "../../assets/right_arrow.svg";

function Gallery({ slides, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {length > 1 && (
        <img className="left-arrow" src={leftArrow} alt="left-arrow" onClick={prevSlide} />
      )}
      {length > 1 && (
          <img className="right-arrow" src={rightArrow} alt="right-arrow" onClick={nextSlide} />
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {index === currentIndex && (
              <img src={image} alt={alt} className="slide-image" />
            )}
            {index === currentIndex && length > 1 && (
              <span className="slide-number">
                {currentIndex + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;
