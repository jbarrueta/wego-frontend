import React from "react";

const Button = ({ type, id, btnName, onClick }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className="b f4 br3 light-green ba bw2 b--light-green bg-white-20 grow pointer"
        onClick={onClick}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
