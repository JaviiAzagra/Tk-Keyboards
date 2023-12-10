import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./KeyboardsDetail.scss";

const KeyboardsDetail = () => {
  const [keyboard, setKeyboard] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchKeyboard = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/keyboards/${id}`
      );
      setKeyboard(data);
    };
    fetchKeyboard();
  }, []);
  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--img">
        <img src={keyboard?.img} alt={keyboard?.name} />
      </div>
      <div className="keyboardsdetail--text">
        <div className="keyboardsdetail--text__top">
          <h1>{keyboard?.name}</h1>
          <p>${keyboard?.price.toFixed(2)}</p>
          <p>{keyboard?.brand}</p>
        </div>
        <p>
          Mochi & Dango theme keycaps, featuring designs by artist Wintea in PBT
          dye sublimation and Cherry profile; With its compact 65% layout, this
          keyboard is designed to maximize desk space while still offering a
          comfortable and efficient typing experience; Beken Plus Multi-modes
          Chip with BT5.0/2.4Ghz/Type-C All-in-One; 5-Pin Hot-swappable; Gaming
          Socket with up to 2000 Cycles; RGB Backlit; 1800 mAh Battery (FCC
          Certified).
        </p>
        <p>
          <span>Switch: </span>
          {keyboard?.switch}
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default KeyboardsDetail;
