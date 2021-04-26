import React from "react";
import "./style.css";


// this function hande the close popup dialog box 
// this fumction recalled in fleetlist.js and vehiclelist.js
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
          <span>{props.title}</span>
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