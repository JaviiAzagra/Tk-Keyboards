import React, { useEffect, useState } from "react";
import "./OrderForm.scss";
import { Link, useNavigate } from "react-router-dom";

const OrderForm = ({ carrito, calcularPrecioTotal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [formComplete, setFormComplete] = useState(false);

  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  useEffect(() => {
    setFreeShipping(calcularPrecioTotal() > 50);
  }, [carrito]);

  useEffect(() => {
    setFormComplete(
      firstName &&
        lastName &&
        address &&
        city &&
        zip &&
        country &&
        phone &&
        email
    );
  }, [firstName, lastName, address, city, zip, country, phone, email]);

  const handleCheckout = () => {
    if (formComplete) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/order-confirmation");
      }, 2000);
    } else {
      setError(
        "Por favor, complete todos los campos antes de proceder al checkout."
      );
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="ordertop">
      <h1>CHECKOUT</h1>
      <div className="orderform">
        <div className="orderform--right">
          <div className="orderform--right__container">
            <p>Ship to</p>
            <div className="orderform--right__container__form">
              <form>
                <div style={{ display: "flex", gap: "40px" }}>
                  <div className="orderform--right__container__form__input">
                    <label htmlFor="name">
                      First Name<span> required</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={firstName}
                      onChange={(e) => handleInputChange(e, setFirstName)}
                    />
                  </div>
                  <div className="orderform--right__container__form__input">
                    <label htmlFor="surname">
                      Last Name<span> required</span>
                    </label>
                    <input
                      type="text"
                      name="surname"
                      value={lastName}
                      onChange={(e) => handleInputChange(e, setLastName)}
                    />
                  </div>
                </div>

                <div className="orderform--right__container__form__input">
                  <label htmlFor="address">
                    Street Address<span> required</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => handleInputChange(e, setAddress)}
                  />
                </div>
                <div style={{ display: "flex", gap: "40px" }}>
                  <div className="orderform--right__container__form__input">
                    <label htmlFor="city">
                      Town/City<span> required</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={city}
                      onChange={(e) => handleInputChange(e, setCity)}
                    />
                  </div>
                  <div className="orderform--right__container__form__input">
                    <label htmlFor="zip">
                      PostalCode<span> required</span>
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={zip}
                      onChange={(e) => handleInputChange(e, setZip)}
                    />
                  </div>
                </div>

                <div className="orderform--right__container__form__input">
                  <label htmlFor="country">
                    Country<span> required</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => handleInputChange(e, setCountry)}
                  />
                </div>

                <div className="orderform--right__container__form__input">
                  <label htmlFor="phone">
                    Phone Number<span> required</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => handleInputChange(e, setPhone)}
                  />
                </div>
                <div className="orderform--right__container__form__input">
                  <label htmlFor="email">
                    Email<span> required</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, setEmail)}
                  />
                </div>
              </form>
            </div>
            <div className="orderform--right__container__formcreditcard">
              <p onClick={toggleProductDropdown}>
                Payment{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </p>
              {showProductDropdown && (
                <div className="orderform--right__container__formcreditcard__container">
                  <div className="orderform--right__container__formcreditcard__container__form">
                    <form>
                      <div className="orderform--right__container__formcreditcard__container__form__input">
                        <label htmlFor="cardname">
                          Cardholder Name<span> required</span>
                        </label>
                        <input type="text" name="cardname" />
                      </div>
                      <div className="orderform--right__container__formcreditcard__container__form__input">
                        <label htmlFor="cardnumber">
                          Card Number<span> required</span>
                        </label>
                        <input type="text" name="cardnumber" />
                      </div>
                      <div className="orderform--right__container__formcreditcard__container__form__input">
                        <label htmlFor="expdate">
                          Expiration Date<span> required</span>
                        </label>
                        <input type="text" name="expdate" />
                      </div>
                      <div className="orderform--right__container__formcreditcard__container__form__input">
                        <label htmlFor="cvv">
                          CVV<span> required</span>
                        </label>
                        <input type="text" name="cvv" />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              <Link className="formbutton">
                <button /* disabled={!formComplete} */ onClick={handleCheckout}>
                  {loading ? (
                    <svg
                      width="80"
                      height="8"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <circle cx="15" cy="15" r="15">
                        <animate
                          attributeName="r"
                          from="15"
                          to="15"
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="1"
                          to="1"
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate
                          attributeName="r"
                          from="9"
                          to="9"
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="105" cy="15" r="15">
                        <animate
                          attributeName="r"
                          from="15"
                          to="15"
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="1"
                          to="1"
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </Link>
              <div style={{ textAlign: "center" }}>
                {error && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                    }}
                  >
                    Complete all the fields before proceeding to checkout.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="orderform--left">
          <h2>IN YOUR BAG</h2>
          <div className="orderform--left__cart">
            {carrito.map((item, index) => (
              <div className="orderform--left__cart__container" key={index}>
                <div className="orderform--left__cart__container--img">
                  <img
                    onClick={() => navigate(`/products/id/${item._id}`)}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div>
                  <h1>{item.name}</h1>
                  <p>
                    {item.price.toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      style: "currency",
                      currency: "EUR",
                    })}
                  </p>
                  <p></p>
                  <p>{item.type}</p>
                  <p>
                    Qty: {item.cantidad} |{" "}
                    {(item.price * item.cantidad)
                      .toLocaleString("es-ES", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "EUR",
                      })
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="orderform--left__price">
            <p>
              Subtotal{" "}
              <span>
                {calcularPrecioTotal()
                  .toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "EUR",
                  })
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
            </p>
            <p>
              Shipping <span>{freeShipping ? "Free" : "10,00 €"}</span>
            </p>
            <p className="orderform--left__price__total">
              Total{" "}
              <span>
                {(calcularPrecioTotal() + (freeShipping ? 0 : 10))
                  .toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "EUR",
                  })
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
