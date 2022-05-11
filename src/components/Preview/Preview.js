import React, { useState } from "react";

import Minus from "../../assets/images/icon-minus.svg";
import Plus from "../../assets/images/icon-plus.svg";
import Cart from "../../assets/images/icon-cart.svg";
import "./Preview.css";

const Preview = () => {
  const subtractHandler = () => {
    if (count === 0) return;
    setCount(--count);
  };

  const appendHandler = () => {
    setCount(++count);
  };

  let [count, setCount] = useState(0);
  return (
    <div className="preview">
      <h4 className="preview-brand">sneaker company</h4>
      <h3 className="preview-product">fall limited edition sneakers</h3>
      <p className="preview-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="preview-prices__flex">
        <div className="preview-prices">
          <span className="preview-price">$125.00</span>
          <span className="preview-discount">50%</span>
        </div>
        <p className="preview-price__orig">$250.00</p>
      </div>
      <div className="preview-CTA">
        <span className="btn preview-counter">
          <img
            className="preview-minus"
            src={Minus}
            onClick={subtractHandler}
          />
          <span className="preview-counter__number">{count}</span>
          <img className="preview-plus" src={Plus} onClick={appendHandler} />
        </span>
        <button className="btn preview-btn">
          <img className="preview-btn__icon" src={Cart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Preview;
