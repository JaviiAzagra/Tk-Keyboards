import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Shipping from "../../Components/Shipping/Shipping";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState([]); // Nuevo estado para los tipos seleccionados
  const [selectedBrands, setSelectedBrands] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; // Número de productos por página
  const [isFiltersMobileVisible, setIsFiltersMobileVisible] = useState(false);

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

  const filteredProducts = data ? filterProductsByTypesAndBrands() : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const toggleFiltersMobile = () => {
    setIsFiltersMobileVisible(!isFiltersMobileVisible);
  };

  return (
    <div className="product">
      {/* <h1>All Products</h1> */}

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

          <div className="containerproducts--filtersmobile">
            <button onClick={toggleFiltersMobile}>REFINE</button>
            {isFiltersMobileVisible && (
              <div className="popup-container">
                <div className="popup-content">
                  <button onClick={toggleFiltersMobile}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
                    </svg>
                  </button>
                  <div className="product--filter">
                    <h2>PRODUCT TYPE </h2>
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
                  {/* <button onClick={toggleFiltersMobile}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
                    </svg>
                  </button> */}
                </div>
              </div>
            )}
          </div>

          <div className="keyboards">
            {Array.isArray(currentProducts) && currentProducts.length === 0 ? (
              <p className="keyboards--nan">No products found.</p>
            ) : (
              currentProducts.map((item, index) => (
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
      <Pagination
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        paginate={setCurrentPage}
      />
      <Shipping />
    </div>
  );
};

export default Products;
