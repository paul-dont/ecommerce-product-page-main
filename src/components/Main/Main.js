import React, { useState } from "react";

import Slider from "../Slider/Slider";
import Preview from "../Preview/Preview";
import ModalSlider from "../ModalSlider/ModalSlider";
import "./Main.css";

const Main = () => {
  const [modalStatus] = useState("hidden");

  return (
    <div className="main">
      <ModalSlider className={modalStatus} />
      <Slider />
      <Preview />
    </div>
  );
};

export default Main;
