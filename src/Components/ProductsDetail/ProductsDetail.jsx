import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = ({ productos, agregarAlCarrito }) => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/products/${id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--img">
        <img src={product?.img} alt={product?.name} />
      </div>
      <div className="keyboardsdetail--text">
        <div className="keyboardsdetail--text__top">
          <h1>{product?.name}</h1>
          <p>${product?.price.toFixed(2)}</p>
          <p>{product?.brand}</p>
        </div>
        <p>
          Akko x Designer EnjoyInMySec official Wavez keycap set; The
          comprehensive 226-key is designed to fit all keyboard layouts;
          Featuring PBT material and ASA profile for enhanced durability and a
          comfortable typing experience.
        </p>
        {product?.switch && (
          <>
            <p>
              <span>Switch: </span>
              {product?.switch}
            </p>
          </>
        )}
        <button onClick={() => agregarAlCarrito(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductsDetail;
