import React, { useEffect, useState } from "react";
import "./Order.scss";
import { Link, Navigate } from "react-router-dom";
import Shipping from "../Shipping/Shipping";
import { useSelector } from "react-redux";
import Login2 from "../Login2/Login2";

const Order = ({ carrito, calcularPrecioTotal, borrarCarrito }) => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const nuevoNumero = Math.floor(Math.random() * 1e20); // Número aleatorio con 20 cifras
    setNumeroAleatorio(nuevoNumero);
  }, []);
  return (
    <div className="order">
      {!user && <Login2 type="login" />}
      {user && (
        <>
          <div className="order--info">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-check"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              Order Confirmed
            </h1>
            <p>
              Dear {user?.name} {user?.surname},
            </p>
            <p>Thank you for choosing Tk Keyboards!</p>
            <p style={{ maxWidth: "400px", textAlign: "center" }}>
              We're pleased to inform you that your order has been successfully
              confirmed. Below are the details of your purchase:
            </p>
            <p>
              Order ID: <span>#{numeroAleatorio}</span>
            </p>
          </div>
          <div className="order--cart">
            <ul>
              {carrito.map((item, index) => (
                <div className="carrito--container__products" key={index}>
                  <img src={item.img} />
                  <div style={{ maxWidth: "300px", minWidth: "300px" }}>
                    <p>{item.name}</p>
                    <span style={{ fontWeight: "600" }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <p>Quantity: {item.cantidad}</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: "600",
                        display: "flex",
                        gap: "1rem",
                      }}
                      className="carrito--container__price"
                    >
                      ${(item.price * item.cantidad).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
            <p style={{ textAlign: "right", fontSize: "20px" }}>
              Total: ${calcularPrecioTotal()}
            </p>
            <div className="order--cart__button">
              <Link to="/cart">
                <button onClick={() => borrarCarrito()}>Continue</button>
              </Link>
            </div>
          </div>
          <Shipping />
        </>
      )}
    </div>
  );
};

export default Order;
