import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import Switch from "../../Components/Switchs/Switch";
import Keyboards from "../../Components/Keyboards/Keyboards";
import Keycaps from "../../Components/Keycaps/Keycaps";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
      <h1>All Products</h1>
      <Keyboards />
      <Switch />
      <Keycaps />
    </div>
  );
};

export default Products;
