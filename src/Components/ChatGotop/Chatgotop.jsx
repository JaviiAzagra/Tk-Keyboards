import React, { useState } from "react";
import Chat from "../Chat/Chat";
import GoTop from "../GoTop/GoTop";
import "./ChatGotop.scss";

const Chatgotop = () => {
  // Estado para controlar la visibilidad del div
  const [mixVisible, setMixVisible] = useState(false);
  // Estado para controlar el ícono del botón
  const [buttonIcon, setButtonIcon] = useState("menu");

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    setMixVisible(!mixVisible); // Cambiar el estado de visibilidad al contrario del estado actual
    setButtonIcon((prevIcon) => (prevIcon === "menu" ? "close" : "menu")); // Cambiar el ícono del botón
  };

  return (
    <div>
      <div className="chatgotop" onClick={handleButtonClick}>
        <button>
          {buttonIcon === "menu" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8l16 0" />
              <path d="M4 16l16 0" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
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
          )}
        </button>
      </div>
      {mixVisible && (
        <div className="mix">
          <Chat />
          <GoTop />
        </div>
      )}
    </div>
  );
};

export default Chatgotop;
