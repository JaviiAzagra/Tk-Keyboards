import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Navbar2 from "../Navbar2/Navbar2";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

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

  /* const { user, token } = useSelector((state) => state.auth);
  const { profiles } = useSelector((state) => state.profiles); */

  return (
    <div>
      <div className="navbar">
        {/* <Navbar2 /> */}
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
              <Link to="/profile">
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
              <Link to="/cart">
                <svg
                  className="cart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2H2.5Zm3.274 6.637L4.734 5h8.027l-1.474 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363ZM6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z" />
                </svg>
              </Link>
            </div>

            <div className="menu">
              <div className="mobile-menu">
                <Link to="/profile">
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
                <Link to="/cart">
                  <svg
                    className="cart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2H2.5Zm3.274 6.637L4.734 5h8.027l-1.474 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363ZM6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z" />
                  </svg>
                </Link>
                <svg
                  onClick={hamburgerMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
            <li>
              <NavLink to="/products">
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
