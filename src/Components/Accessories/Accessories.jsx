import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

const Accessories = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/products`
        );

        // Filter only the keyboards from the API response
        const keyboardsData = response.data.filter(
          (item) => item.type === "accessories"
        );

        setData(keyboardsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const productBrand = ["Akko", "Keychron", "Gateron"];

  const toggleBrandSelection = (brand) => {
    const isSelected = selectedBrands.includes(brand);
    if (isSelected) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filterProductsByBrands = () => {
    if (selectedBrands.length === 0) {
      return data; // Si no hay tipos ni marcas seleccionadas, mostrar todos los productos
    } else {
      return data.filter(
        (product) =>
          selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      );
    }
  };

  const filteredProducts = data ? filterProductsByBrands() : [];

  return (
    <div className="products">
      {loading ? (
        <Loader />
      ) : (
        <div className="containerproducts">
          <div className="product--filter">
            <h2>BRAND</h2>
            <div className="product--filter__inputs">
              {productBrand.map((brand) => (
                <label key={brand}>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrandSelection(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div className="keyboards">
            {filteredProducts.map((item, index) => (
              <div
                className="keyboards--cards"
                onClick={() => navigate(`/products/accessories/${item._id}`)}
                key={index}
              >
                <div className="keyboards--cards__img">
                  <img src={item?.img} alt={item?.name} />
                </div>
                <div className="keyboards--cards__text">
                  <p className="keyboards--cards__text--name">{item?.name}</p>
                  <p className="keyboards--cards__text--brand">{item?.brand}</p>
                  <p className="keyboards--cards__text--price">
                    {item?.price.toFixed(2)} $
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessories;
