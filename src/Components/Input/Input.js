import React from "react";

const Input = ({ placeholder, id, type }) => {
  return (
    <>
      <input
        type={type}
        className="b black br3 pv2 ph3 ma3 b--black tc bg-white-90 shadow-3"
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
