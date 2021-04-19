import React, { useState } from "react";
import "./ServiceCard.css";
// import gif from "./pet2vet.gif";

export default function ServiceCard({
  image,
  gif,
  title,
  description,
  onClickHandler,
  className,
}) {
  const [img, setImg] = useState(image);
  return (
    <div
      className={`serviceCard br3 shadow-5 grow pointer ${className}`}
      onClick={onClickHandler}
      onMouseEnter={() => setImg(gif)}
      onMouseLeave={() => setImg(image)}
    >
      <img src={img} alt="serviceGIF" height="300px" />
      <div className="cardFilter"></div>
      <div className="serviceTitle center primarySize secondaryColor">
        {title}
      </div>
      <div className="serviceDescription center secondarySize secondaryColor">
        {description}
      </div>
    </div>
  );
}