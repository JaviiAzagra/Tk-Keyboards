import React from "react";
import "./Pagination.scss";

const Pagination = ({ totalProducts, productsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    paginate(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} onClick={() => handlePageClick(number)}>
          {number}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
