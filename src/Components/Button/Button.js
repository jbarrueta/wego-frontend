import React from "react";
import "./Button.css";

const Button = ({ type, id, btnName, onClick, style, classNames }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`secondarySize button ba pv2 ph5 br-pill grow pointer ${classNames}`}
        onClick={onClick}
        style={style}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
