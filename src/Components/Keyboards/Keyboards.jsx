import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { Link, useNavigate } from "react-router-dom";

const Keyboards = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/products?${searchCategory}=${searchTerm}`
        );

        // Filter only the keyboards from the API response
        const keyboardsData = response.data.filter(
          (item) => item.type === "keyboards"
        );

        setData(keyboardsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, searchCategory]);

  return (
    <div className="products">
      <h2>Keyboards</h2>
      <Link to="/products">All Products</Link>
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
