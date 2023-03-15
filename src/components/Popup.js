import React from "react";
import "../styles/mechanic_list.css";

const Popup = props => {
  return (
    <div className="popup-box">
      {/* <div class="background"></div>
      <div class="foreground"></div> */}
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;