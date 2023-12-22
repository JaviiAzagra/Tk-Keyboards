import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

const Keycaps = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/products?${searchCategory}=${searchTerm}`
        );
        // Filter only the keyboards from the API response
        const keycapsData = response.data.filter(
          (item) => item.type === "keycaps"
        );
        setData(keycapsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, searchCategory]);

  const handleSearch = () => {
    let filteredData = data;

    // Filtrar por término de búsqueda
    filteredData = filteredData.filter((item) =>
      item[searchCategory].toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filtrar por rango de precios
    if (minPrice !== "") {
      filteredData = filteredData.filter(
        (item) => item.price >= parseFloat(minPrice)
      );
    }
    if (maxPrice !== "") {
      filteredData = filteredData.filter(
        (item) => item.price <= parseFloat(maxPrice)
      );
    }

    setData(filteredData);
  };

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
      <h2>Keycaps</h2>
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
                onClick={() => navigate(`/products/keycaps/${item._id}`)}
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

export default Keycaps;
