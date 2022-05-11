import React, { useState } from "react";

import Prod1 from "../../assets/images/image-product-1.jpg";
import Prod2 from "../../assets/images/image-product-2.jpg";
import Prod3 from "../../assets/images/image-product-3.jpg";
import Prod4 from "../../assets/images/image-product-4.jpg";
import Thumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import Thumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import Thumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import Thumb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import BtnRigth from "../../assets/images/icon-next.svg";
import BtnLeft from "../../assets/images/icon-previous.svg";

import "./Slider.css";

const products = [Prod1, Prod2, Prod3, Prod4];
const thumbnails = [Thumb1, Thumb2, Thumb3, Thumb4];

const Slider = (props) => {
  let [slideCounter, setSlideCounter] = useState(0);

  const leftSlideHandler = () => {
    if (slideCounter === 0) return;
    setSlideCounter(--slideCounter);
  };

  const rightSlideHandler = () => {
    if (slideCounter >= 3) return;
    setSlideCounter(++slideCounter);
  };

  const thumbnailHandler = (e) => {
    setSlideCounter(+e.target.dataset.id);
  };

  return (
    <div className={props.className}>
      <div className="slider">
        {products.map((prod, i) => {
          return (
            <div
              key={i}
              className="slide"
              style={{ transform: `translateX(${100 * (i - slideCounter)}%)` }}
            >
              <img src={prod} alt="A pair of shoes" />
            </div>
          );
        })}

        <button
          className="slider-btn slider-btn__left"
          onClick={leftSlideHandler}
        >
          <img src={BtnLeft} alt="left icon" />
        </button>
        <button
          className="slider-btn slider-btn__right"
          onClick={rightSlideHandler}
        >
          <img src={BtnRigth} alt="right icon" />
        </button>
      </div>
      <div className="slider-thumbnails">
        {thumbnails.map((thumb, i) => {
          return (
            <div key={i} className="slider-thumbnail">
              <img
                src={thumb}
                alt="A pair of shoes"
                onClick={thumbnailHandler}
                data-id={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
