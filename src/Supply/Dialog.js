import React from "react";
import "./style.css";

function Dialog(props) {
  return (
    <div className="overlay" onClick={props.onClose}>
      <div
        className="dialog-view"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="dialog-header">
          <span style={{ fontSize: 18 }}>{props.title}</span>
          <span className="close-button" onClick={props.onClose}>
            Close
          </span>
        </div>
        <div className="dialog-content">{props.children}</div>
      </div>
    </div>
  );
}

export default Dialog;