import React from "react";

const Button = ({ type, id, btnName, onClick, style, classNames }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`b f4 br3 light-green ba bw2 b--black-80 bg-black-80 grow pointer ${classNames}`}
        onClick={onClick}
        style={style}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
