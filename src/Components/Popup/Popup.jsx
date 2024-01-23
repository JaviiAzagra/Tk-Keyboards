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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Popup;
