import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KeycapsDetail = () => {
  const [keycap, setKeycap] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchKeyboard = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/keycaps/${id}`
      );
      setKeycap(data);
    };
    fetchKeyboard();
  }, []);
  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--img">
        <img src={keycap?.img} alt={keycap?.name} />
      </div>
      <div className="keyboardsdetail--text">
        <div className="keyboardsdetail--text__top">
          <h1>{keycap?.name}</h1>
          <p>${keycap?.price.toFixed(2)}</p>
          <p>{keycap?.brand}</p>
        </div>
        <p>
          Akko x Designer EnjoyInMySec official Wavez keycap set; The
          comprehensive 226-key is designed to fit all keyboard layouts;
          Featuring PBT material and ASA profile for enhanced durability and a
          comfortable typing experience.
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default KeycapsDetail;
