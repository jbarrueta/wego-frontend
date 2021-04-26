import React from "react";
import AnimatedCar from "../AnimatedCar/AnimatedCar";
import "./Loader.scss";

export default function Loader({ loadMsg }) {
  return (
    <div className="loader center flex-column">
      <AnimatedCar />
      <p className="secondarySize">
        {loadMsg}
        {/* Requesting your <span className="logoFont f3">WeGo</span> vehicle */}
      </p>
    </div>
  );
}
