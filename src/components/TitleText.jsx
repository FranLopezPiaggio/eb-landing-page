import React from "react";
import Title from "../assets/envolvedbook.svg";

const TitleText = () => {
  return (
    <div className="title-container">
      <img
        src={Title}
        alt="Evolved Books"
        className="title-image"
      />
    </div>
  );
};

export default TitleText;