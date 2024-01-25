import React from "react";
import "./Shipping.scss";

const Shipping = () => {
  return (
    <div className="infoshipping">
      <div className="infoshipping__card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-cube-send"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
          <path d="M11 9.5v5.5l5 3" />
          <path d="M16 12.545l5 -3.03" />
          <path d="M7 9h-5" />
          <path d="M7 12h-3" />
          <path d="M7 15h-1" />
        </svg>
        <h1>Free Shipping</h1>
        <p>Free worldwide shopping on al orders over 50$.</p>
      </div>
      <div className="infoshipping__card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-headset"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
          <path d="M18 19c0 1.657 -2.686 3 -6 3" />
          <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
          <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
        </svg>
        <h1>Customer Services</h1>
        <p>Our support team is available to help you within 24 hours.</p>
      </div>
      <div className="infoshipping__card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-credit-card-refund"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
          <path d="M3 10h18" />
          <path d="M7 15h.01" />
          <path d="M11 15h2" />
          <path d="M16 19h6" />
          <path d="M19 16l-3 3l3 3" />
        </svg>
        <h1>Warranty & Return</h1>
        <p>2-year parts warranty & 30 days return policy.</p>
      </div>
      <div className="infoshipping__card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-shield-lock"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M12 12l0 2.5" />
        </svg>
        <h1>Secure Payment</h1>
        <p>100% Secure Checkout and Personal Privacy Protection.</p>
      </div>
    </div>
  );
};

export default Shipping;
