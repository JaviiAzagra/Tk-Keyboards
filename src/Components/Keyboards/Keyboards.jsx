import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useNavigate } from "react-router-dom";

const Keyboards = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/keyboards?${searchCategory}=${searchTerm}`
        );
        setData(response.data);
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
  return (
    <div className="products">
      <h2>Keyboards</h2>
      {/* <div>
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="brand">Brand</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchCategory}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="keyboards">
            {data.map((item, index) => (
              <div
                className="keyboards--cards"
                onClick={() => navigate(`/products/keyboards/${item._id}`)}
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

export default Keyboards;
