import React, { useState } from "react";
import "./Popup.scss";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup--container">
        <h1>Welcome to Tk Keyboards!</h1>
        <p>Subscribe to our Newsletter:</p>
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </div>
      <button className="close-button" onClick={onClose}>
        ❌
      </button>
    </div>
  );
};

export default Popup;
