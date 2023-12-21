import React from "react";
import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";

export const Cart = ({
  carrito,
  calcularPrecioTotal,
  borrarCarrito,
  borrarProducto,
}) => {
  const navigate = useNavigate();
  return (
    <div className="carrito">
      <h2>Cart</h2>
      <ul>
        {carrito.map((item, index) => (
          <div className="carrito--container" key={index}>
            <img
              onClick={() => navigate(`/products/${item._id}`)}
              src={item.img}
            />
            <p className="carrito--container__name">{item.name}</p>
            <p className="carrito--container__price">
              $ {item.price.toFixed(2)}{" "}
              <button onClick={() => borrarProducto(item.id)}>❌</button>
            </p>
          </div>
        ))}
      </ul>
      <div className="carrito--total">
        <p>Total:</p>
        <p>${calcularPrecioTotal()}</p>
      </div>
    </div>
  );
};
