import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  placeholder,
  id,
  type,
  required,
  className,
  onChange,
  onClick,
  onBlur,
}) => {
  return (
    <>
      <input
        type={type}
        required={required}
        className={`${
          className || "b--black"
        } input-reset black br3 pv2 ph3 ma3 tc bg-white-90 shadow-3 `}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
