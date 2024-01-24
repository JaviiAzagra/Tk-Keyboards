import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./RecentlyProducts.scss";

const RecentlyProducts = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener productos vistos recientemente del localStorage
    const viewedProducts =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];
    setRecentlyViewed(viewedProducts);
  }, []);

  // Verificar si hay productos recientemente vistos
  const hasRecentlyViewedProducts = recentlyViewed.length > 0;

  return (
    <div className="recently">
      {hasRecentlyViewedProducts && (
        <>
          <h1>Recently viewed products</h1>
          <div className="recently--products">
            {recentlyViewed.map((product) => (
              <div
                style={{ width: "240px" }}
                className="keyboards--cards"
                onClick={() => {
                  navigate(`/products/${product?._id}`);
                  window.location.reload();
                }}
                key={product.id}
              >
                <div className="keyboards--cards__img">
                  <img src={product?.img} alt={product?.name} />
                </div>
                <div className="keyboards--cards__text">
                  <p className="keyboards--cards__text--name">
                    {product?.name}
                  </p>
                  <p className="keyboards--cards__text--brand">
                    {product?.brand}
                  </p>
                  <p className="keyboards--cards__text--price">
                    {product?.price.toFixed(2)} $
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentlyProducts;
