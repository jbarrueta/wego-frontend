import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  type,
  id,
  btnName,
  onClick,
  style,
  classNames,
  children,
}) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`secondarySize button ba pv2 ph5 br-pill grow pointer ${classNames}`}
        onClick={onClick}
        style={style}
      >
        {btnName || children}
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  btnName: PropTypes.string,
  children: (props, propName, componentName) => {
    if (props.btnName == undefined && props[propName] === undefined) {
      return new Error("Must provide either a btnName or children");
    }
  },
  style: PropTypes.object,
  classNames: PropTypes.string,
};

export default Button;
