import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SwitchesDetail = ({ productos, agregarAlCarrito }) => {
  const [switches, setSwitch] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchKeyboard = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/products/${id}`
      );
      setSwitch(data);
    };
    fetchKeyboard();
  }, []);

  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--img">
        <img src={switches?.img} alt={switches?.name} />
      </div>
      <div className="keyboardsdetail--text">
        <div className="keyboardsdetail--text__top">
          <h1>{switches?.name}</h1>
          <p>${switches?.price.toFixed(2)}</p>
          <p>{switches?.brand}</p>
        </div>
        <p>
          Akko’s first silent tactile switches; It comes with an early tactile
          feeling at 0.4mm until 2.0mm, with an operating force at 43gf, a
          tactile force of 58gf and a bottom-out force at 60gf (Max). Lifespan:
          50million; 5-pin and fits keycaps with standard MX structure;
          Material: POM/PA/PA; 45 pcs in a pack. Expected Shipment on 10th.
        </p>
        <button onClick={() => agregarAlCarrito(switches)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SwitchesDetail;
