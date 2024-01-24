import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";
import Shipping from "../Shipping/Shipping";

const Keycaps = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/products`
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
  }, []);

  const productBrand = ["Akko", "Keychron", "Gateron"];
  const productProfile = ["Cherry", "ASA", "JDA", "OSA", "SAL", "OPI", "OEM"];

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

  const toggleProfileSelection = (profile) => {
    const isSelected = selectedProfile.includes(profile);
    if (isSelected) {
      setSelectedProfile(
        selectedProfile.filter((selectedProfile) => selectedProfile !== profile)
      );
    } else {
      setSelectedProfile([...selectedProfile, profile]);
    }
  };

  const filterProductsByTypesAndProfile = () => {
    if (selectedProfile.length === 0 && selectedBrands.length === 0) {
      return data; // Si no hay tipos ni marcas seleccionadas, mostrar todos los productos
    } else {
      return data.filter(
        (product) =>
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand)) &&
          (selectedProfile.length === 0 ||
            selectedProfile.includes(product.profile))
      );
    }
  };

  const countProductsByBrand = (brand) => {
    return filteredProducts.reduce(
      (count, product) => (product.brand === brand ? count + 1 : count),
      0
    );
  };

  const countProductsByProfile = (profile) => {
    return filteredProducts.reduce(
      (count, product) => (product.profile === profile ? count + 1 : count),
      0
    );
  };

  const filteredProducts = data ? filterProductsByTypesAndProfile() : [];

  const [isFiltersMobileVisible, setIsFiltersMobileVisible] = useState(false);

  const toggleFiltersMobile = () => {
    setIsFiltersMobileVisible(!isFiltersMobileVisible);
  };

  return (
    <div className="products">
      <div className="products__backgroundkeycaps">
        <h2>Keycaps</h2>
      </div>
      {loading ? (
        <>
          <Loader />
          <h1 style={{ marginBottom: "50px" }}>Loading products...</h1>
        </>
      ) : (
        <div className="containerproducts">
          <div className="containerproducts--filters">
            <div className="containerproducts--filters__title">
              <svg
                role="presentation"
                fill="none"
                focusable="false"
                stroke-width="2"
                width="20"
                height="14"
                class="icon-subdued icon icon-filter"
                viewBox="0 0 20 14"
              >
                <path
                  d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4V2ZM1 4H5V2H1V4Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12V10ZM1 12H11V10H1V12Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10 2H9V4H10V2ZM19 4C19.5523 4 20 3.55228 20 3C20 2.44772 19.5523 2 19 2V4ZM10 4H19V2H10V4Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16 10H15V12H16V10ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM16 12H19V10H16V12Z"
                  fill="currentColor"
                ></path>
                <circle cx="7" cy="3" r="2" stroke="currentColor"></circle>
                <circle cx="13" cy="11" r="2" stroke="currentColor"></circle>
              </svg>
              <p>Filters</p>
            </div>
            <div className="product--filter">
              <h2>Brand</h2>
              <div className="product--filter__inputs">
                {productBrand.map((brand) => (
                  <label key={brand}>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrandSelection(brand)}
                    />
                    {brand} ({countProductsByBrand(brand)})
                  </label>
                ))}
              </div>
            </div>
            <div className="product--filter">
              <h2>Keycaps Profile</h2>
              <div className="product--filter__inputs">
                {productProfile.map((profile) => (
                  <label key={profile}>
                    <input
                      type="checkbox"
                      checked={selectedProfile.includes(profile)}
                      onChange={() => toggleProfileSelection(profile)}
                    />
                    {profile} ({countProductsByProfile(profile)})
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
                  <div className="containerproducts--filters__title">
                    <svg
                      role="presentation"
                      fill="none"
                      focusable="false"
                      stroke-width="2"
                      width="20"
                      height="14"
                      class="icon-subdued icon icon-filter"
                      viewBox="0 0 20 14"
                    >
                      <path
                        d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4V2ZM1 4H5V2H1V4Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12V10ZM1 12H11V10H1V12Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 2H9V4H10V2ZM19 4C19.5523 4 20 3.55228 20 3C20 2.44772 19.5523 2 19 2V4ZM10 4H19V2H10V4Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16 10H15V12H16V10ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM16 12H19V10H16V12Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="7"
                        cy="3"
                        r="2"
                        stroke="currentColor"
                      ></circle>
                      <circle
                        cx="13"
                        cy="11"
                        r="2"
                        stroke="currentColor"
                      ></circle>
                    </svg>
                    <p>Filters</p>
                  </div>
                  <div className="product--filter">
                    <h2>Brand</h2>
                    <div className="product--filter__inputs">
                      {productBrand.map((brand) => (
                        <label key={brand}>
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrandSelection(brand)}
                          />
                          {brand} ({countProductsByBrand(brand)})
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="product--filter">
                    <h2>Keycaps Profile</h2>
                    <div className="product--filter__inputs">
                      {productProfile.map((profile) => (
                        <label key={profile}>
                          <input
                            type="checkbox"
                            checked={selectedProfile.includes(profile)}
                            onChange={() => toggleProfileSelection(profile)}
                          />
                          {profile} ({countProductsByProfile(profile)})
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="keyboards">
            {filteredProducts.length === 0 ? (
              <p
                style={{ backgroundColor: "transparent", fontSize: "20px" }}
                className="keyboards--cards"
              >
                No products found.
              </p>
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
      <Shipping />
    </div>
  );
};

export default Keycaps;
