import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AccessoriesDetail = ({ productos, agregarAlCarrito }) => {
  const [accessories, setAccessory] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchKeyboard = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/products/${id}`
      );
      setAccessory(data);
    };
    fetchKeyboard();
  }, []);
  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--img">
        <img src={accessories?.img} alt={accessories?.name} />
      </div>
      <div className="keyboardsdetail--text">
        <div className="keyboardsdetail--text__top">
          <h1>{accessories?.name}</h1>
          <p>${accessories?.price.toFixed(2)}</p>
          <p>{accessories?.brand}</p>
        </div>
        <p>
          The fully assembled version includes: ABS plastic housing The keyboard
          PCB, screw-in stabs, and the steel plate Double-shot OSA PBT keycaps
          (including Mac & Windows keycaps) Keychron K Pro switches The barebone
          version does not include the keycaps and switches. No discount codes
          can be used for V2. Please drop your email on "Notify Me When
          Available" if the product model is out of stock.
        </p>
        <button onClick={() => agregarAlCarrito(accessories)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AccessoriesDetail;
