import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import Navbar2 from "../Navbar2/Navbar2";
import { toast } from "react-toastify";

const Navbar = ({ carrito, calcularPrecioTotal, borrarProducto }) => {
  const [hamburger, setHamburger] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [isBackgroundBlocked, setIsBackgroundBlocked] = useState(false);
  const navigate = useNavigate();

  const numeroDeArticulos = carrito.length;
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const notify = () =>
    toast.success("Product removed from the cart!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleDelete = (product) => {
    borrarProducto(product);
    notify();
  };

  useEffect(() => {
    // Verifica si el precio total es menor a $50 para habilitar el envío gratuito
    setFreeShipping(calcularPrecioTotal() > 50);
  }, [carrito]);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
    setIsBackgroundBlocked(!isBackgroundBlocked);
  };

  useEffect(() => {
    if (isBackgroundBlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBackgroundBlocked]);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
      // Limpia el bloqueo del fondo cuando se desmonta el componente
      document.body.style.overflow = "auto";
    };
  }, []);

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the dropdown when a link is clicked
    setDropdownOpen(false);
  };

  const navLinks = [
    {
      to: "/products",
      text: "Products",
    },
    { to: "/support", text: "Support" },
    { to: "/about", text: "Our Story" },
    { to: "/contact", text: "Contact" },
  ];

  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const changeNavbarColor = () => {
    setColorChange(window.scrollY >= 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div>
      <div
        /*  className={`navbar ${
          colorChange ? "colorChange" : ""
        }`} */ className="navbar"
      >
        <nav>
          <div className="navbar--nav">
            <div className="navbar--nav--title">
              <NavLink to="/">
                {/* <img src="/assets/logotk1.png" alt="logotk" /> */}
                <img src="/assets/logo.png" alt="logotk" />
              </NavLink>
            </div>
            <div className="navbar--nav--links">
              <div className="nav-link-with-dropdown">
                <NavLink>
                  Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-down"
                    width="20"
                    height="20"
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
                </NavLink>
                <div className="dropdown">
                  <div className="dropdown--links">
                    <Link to="/products/keyboards">
                      <h3>Keyboards</h3>
                      <ul>
                        <li>60%</li>
                        <li>65%</li>
                        <li>75%</li>
                        <li>80% | TKL</li>
                        <li>100% | Full Size</li>
                        <li>View All</li>
                      </ul>
                    </Link>
                    <Link to="/products/keycaps">
                      <h3>Keycaps</h3>
                      <ul>
                        <li>Cherry</li>
                        <li>ASA</li>
                        <li>JDA</li>
                        <li>OSA</li>
                        <li>SAL</li>
                        <li>OPI</li>
                        <li>OEM</li>
                        <li>View All</li>
                      </ul>
                    </Link>
                    <Link to="/products/switches">
                      <h3>Switches</h3>
                      <ul>
                        <li>Linear</li>
                        <li>Tactile</li>
                        <li>Click</li>
                        <li>View All</li>
                      </ul>
                    </Link>
                    <Link to="/products/accessories">
                      <h3>Accessories</h3>
                      <ul>
                        <li>Mouse</li>
                        <li>Mouse Pad</li>
                        <li>Coiled Cable</li>
                        <li>Wrist Rest</li>
                        <li>Stabilizer</li>
                        <li>View All</li>
                      </ul>
                    </Link>
                  </div>
                  <Link to="/products">
                    <div className="dropdown--img">
                      <p className="dropdown--img__text">All Products</p>
                      <div className="image-container enlarge-on-hover">
                        <img src="/assets/tecladodrop.jpg" alt="tecladohome" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <NavLink to="/support">Support</NavLink>
              <NavLink to="/about">Our Story</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="navbar--nav--svg">
              <Link className="linkcart" to="/profile">
                <svg
                  className="profile"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke-width="1.5">
                    <path
                      stroke-linejoin="round"
                      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                    />
                    <circle cx="12" cy="7" r="3" />
                  </g>
                </svg>
              </Link>
              <Link onClick={toggleCart} className="linkcart" /* to="/cart" */>
                <div className="cart-container">
                  <svg
                    className="cart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2H2.5Zm3.274 6.637L4.734 5h8.027l-1.474 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363ZM6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z" />
                  </svg>
                  {carrito.length > 0 && (
                    <p className="superponer">{numeroDeArticulos}</p>
                  )}
                </div>
              </Link>
              {isCartVisible && (
                <div className="popupcart-container">
                  <div className="popupcart-content">
                    {carrito.length > 0 ? (
                      <>
                        <div className="popupcart-content__top">
                          <div className="popupcart-content__top--title">
                            <h1>Cart</h1>
                            <p>{numeroDeArticulos}</p>
                          </div>
                          <button onClick={toggleCart}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                            >
                              <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
                            </svg>
                          </button>
                          <div className="popupcart-content__top__cart">
                            {carrito.map((item, index) => (
                              <div
                                className="popupcart-content__top__cart__container"
                                key={index}
                              >
                                <div
                                  onClick={() => {
                                    navigate(`/products/${item?._id}`);
                                    window.location.reload();
                                  }}
                                  className="popupcart-content__top__cart__container--info"
                                >
                                  <img src={item.img} alt={item.name} />
                                  <div className="popupcart-content__top__cart__container--info__data">
                                    <h1>{item.name}</h1>
                                    <p>
                                      {item.price
                                        .toLocaleString("es-ES", {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                          style: "currency",
                                          currency: "EUR",
                                        })
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </p>
                                    {item?.color && item.color.length > 0 && (
                                      <p>{item?.color[0]}</p>
                                    )}
                                    {item?.switch && <p>{item?.switch}</p>}
                                    {item?.switchType && (
                                      <p>{item?.switchType}</p>
                                    )}
                                    {item?.profile && <p>{item?.profile}</p>}

                                    <p>
                                      Qty: {item?.cantidad} |{" "}
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
                                <div className="popupcart-content__top__cart__container--delete">
                                  <button
                                    onClick={() => handleDelete(item._id)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="icon icon-tabler icon-tabler-x"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      />
                                      <path d="M18 6l-12 12" />
                                      <path d="M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="popupcart-content__botton">
                          <div className="popupcart-content__botton__price2">
                            <p>Subtotal</p>
                            <p>
                              {calcularPrecioTotal()
                                .toLocaleString("es-ES", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                  style: "currency",
                                  currency: "EUR",
                                })
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </p>
                          </div>
                          <div className="popupcart-content__botton__price2">
                            <p>Shipping</p>
                            <p>{freeShipping ? "Free" : "10,00 €"}</p>
                          </div>
                          <div className="popupcart-content__botton__price">
                            <p>Total</p>
                            <p>
                              {(calcularPrecioTotal() + (freeShipping ? 0 : 10))
                                .toLocaleString("es-ES", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                  style: "currency",
                                  currency: "EUR",
                                })
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                            </p>
                          </div>
                          <p>Taxes and shipping calculated at checkout</p>
                          <div className="popupcart-content__botton--buttons">
                            <Link to="/checkout" onClick={toggleCart}>
                              Checkout
                            </Link>
                            <Link to="/cart" onClick={toggleCart}>
                              View cart
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <button onClick={toggleCart}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
                          </svg>
                        </button>
                        <div className="popupcart-content__empty">
                          <h1>Your cart is empty</h1>
                          <p>Looks like you haven't added anything yet</p>
                          <Link to="/products" onClick={toggleCart}>
                            Continue Shopping
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="menu">
              <div className="mobile-menu">
                <Link className="linkcart" to="/profile">
                  <svg
                    className="profile"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke-width="1.5">
                      <path
                        stroke-linejoin="round"
                        d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                      />
                      <circle cx="12" cy="7" r="3" />
                    </g>
                  </svg>
                </Link>
                <Link className="linkcart" to="/cart">
                  <div className="cart-container">
                    <svg
                      className="cart"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2H2.5Zm3.274 6.637L4.734 5h8.027l-1.474 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363ZM6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z" />
                    </svg>
                    {carrito.length > 0 && (
                      <p className="superponer">{numeroDeArticulos}</p>
                    )}
                  </div>
                </Link>
                <svg
                  className="hamburger"
                  onClick={hamburgerMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}
        >
          <span onClick={hamburgerMenu}>
            <div className="mobile-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
              </svg>
            </div>
          </span>

          <ul /* onClick={hamburgerMenu} */>
            <li
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <NavLink to="/products" onClick={toggleProductDropdown}>
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-badge-right"
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
                  <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                </svg>
              </NavLink>
              {showProductDropdown && (
                <div className="mobile-dropdown">
                  <NavLink
                    style={{ display: "flex" }}
                    to="/products/keyboards"
                    onClick={hamburgerMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-point-filled"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>
                    Keyboards
                  </NavLink>
                  <NavLink to="/products/keycaps" onClick={hamburgerMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-point-filled"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>{" "}
                    Keycaps
                  </NavLink>
                  <NavLink to="/products/switches" onClick={hamburgerMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-point-filled"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>{" "}
                    Switches
                  </NavLink>
                  <NavLink to="/products/accessories" onClick={hamburgerMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-point-filled"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>
                    Accessories
                  </NavLink>
                  <NavLink to="/products" onClick={hamburgerMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-point-filled"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>
                    All Products
                  </NavLink>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/support" onClick={hamburgerMenu}>
                Support{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-badge-right"
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
                  <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={hamburgerMenu}>
                Our Story{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-badge-right"
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
                  <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={hamburgerMenu}>
                Contact{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-badge-right"
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
                  <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
