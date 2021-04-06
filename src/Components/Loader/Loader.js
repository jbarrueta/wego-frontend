import React from "react";
import AnimatedCar from "../AnimatedCar/AnimatedCar";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader center flex-column">
      <AnimatedCar />
      <p className="secondarySize">
        Requesting your <span className="logoFont f3">WeGo</span> vehicle
      </p>
    </div>
  );
}
