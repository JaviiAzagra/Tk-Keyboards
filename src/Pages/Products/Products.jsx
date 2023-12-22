import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState([]); // Nuevo estado para los tipos seleccionados
  const [selectedBrands, setSelectedBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/products`
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    // Función para desordenar un array utilizando el algoritmo de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProducts = data ? shuffleArray([...data]) : [];

  const productTypes = ["keyboards", "switches", "keycaps", "accessories"];
  const productBrand = ["Akko", "Keychron", "Gateron"];

  const toggleTypeSelection = (type) => {
    const isSelected = selectedTypes.includes(type);
    if (isSelected) {
      setSelectedTypes(
        selectedTypes.filter((selectedType) => selectedType !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

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

  const filterProductsByTypesAndBrands = () => {
    if (selectedTypes.length === 0 && selectedBrands.length === 0) {
      return data; // Si no hay tipos ni marcas seleccionadas, mostrar todos los productos
    } else {
      return data.filter(
        (product) =>
          (selectedTypes.length === 0 ||
            selectedTypes.includes(product.type)) &&
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand))
      );
    }
  };

  const filteredProducts = data
    ? shuffleArray(filterProductsByTypesAndBrands())
    : [];

  return (
    <div className="product">
      <h1>All Products</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="containerproducts">
          {/* Usar checkboxes con opciones fijas */}
          <div className="containerproducts--filters">
            <div className="product--filter">
              <h2>PRODUCT TYPE</h2>
              <div className="product--filter__inputs">
                {productTypes.map((type) => (
                  <label key={type}>
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleTypeSelection(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
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
          </div>

          <div className="keyboards">
            {Array.isArray(filteredProducts) &&
            filteredProducts.length === 0 ? (
              <p className="keyboards--nan">No products found.</p>
            ) : (
              filteredProducts.map((item, index) => (
                <div
                  className="keyboards--cards"
                  onClick={() => navigate(`/products/${item._id}`)}
                  key={index}
                >
                  <div className="keyboards--cards__img">
                    <img src={item?.img} alt={item?.name} />
                  </div>
                  <div className="keyboards--cards__text">
                    <p className="keyboards--cards__text--name">{item?.name}</p>
                    <p className="keyboards--cards__text--brand">
                      {item?.brand}
                    </p>
                    <p className="keyboards--cards__text--price">
                      {item?.price.toFixed(2)} $
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
