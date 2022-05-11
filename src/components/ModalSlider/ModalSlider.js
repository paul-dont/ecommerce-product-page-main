import React, { useEffect } from "react";

import Slider from "../Slider/Slider";
import Close from "../../assets/images/icon-close.svg";
import "../Slider/Slider.css";
import "./ModalSlider.css";

const ModalSlider = (props) => {
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        const [modal] = document.getElementsByClassName("modal-container");
        modal.classList.add("hidden");
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className={`modal-bg ${props.className}`}>
      <div className="modal-close">
        <img src={Close} alt="close icon" />
      </div>
      <Slider className={`modal ${props.className}`} />
    </div>
  );
};

export default ModalSlider;
