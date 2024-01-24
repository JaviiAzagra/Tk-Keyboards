import React, { useEffect, useState } from "react";
import "./Order.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Shipping from "../Shipping/Shipping";
import { useSelector } from "react-redux";
import Login2 from "../Login2/Login2";

const Order = ({ carrito, calcularPrecioTotal, borrarCarrito }) => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const nuevoNumero = Math.floor(Math.random() * 1e20); // Número aleatorio con 20 cifras
    setNumeroAleatorio(nuevoNumero);
  }, []);

  const [freeShipping, setFreeShipping] = useState(false); // Nuevo estado para el envío gratuito

  // ... (resto del código)

  useEffect(() => {
    // Verifica si el precio total es menor a $50 para habilitar el envío gratuito
    setFreeShipping(calcularPrecioTotal() > 50);
  }, [carrito]);
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
            <table className="carrito--container__table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item, index) => (
                  <tr className="tr" key={index}>
                    <td>
                      <div className="carrito--container__product-info">
                        <img
                          onClick={() => navigate(`/products/${item._id}`)}
                          src={item.img}
                          alt={item.name}
                        />
                        <div>
                          <p>{item.name}</p>
                          <span style={{ fontWeight: "600" }}>
                            <span>${item.price.toFixed(2)}</span>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <div className="carrito--container__table__quantity">
                        <p>{item.cantidad}</p>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div
                        className="carrito--container__table__total"
                        style={{
                          fontWeight: "900px",
                          display: "flex",
                          gap: "10px",
                          justifyContent: "space-between",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                          }}
                        >
                          ${(item.price * item.cantidad).toFixed(2)}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cartmobile">
              {carrito.map((item, index) => (
                <div className="cart--mobile" key={index}>
                  <div className="cart--mobile__img">
                    <img
                      onClick={() => navigate(`/products/${item._id}`)}
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="cart--mobile__data">
                    <h1>{item.name}</h1>
                    <p>${(item.price * item.cantidad).toFixed(2)}</p>
                    <p>{item.type}</p>
                    <div className="cart--mobile__data--quantity">
                      <p>{item.cantidad} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontWeight: "400", paddingTop: "20px" }}>
              Shipping: {freeShipping ? "Free" : "$10.00"}
            </p>

            <p style={{ textAlign: "right", fontSize: "20px" }}>
              Total: $
              {(calcularPrecioTotal() + (freeShipping ? 0 : 10)).toFixed(2)}
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
