import React from "react";
import "./Shipping.scss";

const Shipping = () => {
  return (
    <div className="infoshipping">
      <div className="infoshipping__card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-cube-send"
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
          <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
          <path d="M11 9.5v5.5l5 3" />
          <path d="M16 12.545l5 -3.03" />
          <path d="M7 9h-5" />
          <path d="M7 12h-3" />
          <path d="M7 15h-1" />
        </svg>
        <h1>Free Shipping</h1>
        <p>Free worldwide shopping on al orders over 30$.</p>
      </div>
      <div className="infoshipping__card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-headphones-filled"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M21 18a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a3 3 0 0 1 2.824 -2.995l.176 -.005h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .24v.17c.25 -.088 .516 -.144 .791 -.163l.209 -.007h1a3 3 0 0 1 2.995 2.824l.005 .176v3a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a9 9 0 0 1 17.996 -.265l.004 .265v6z"
            stroke-width="0"
            fill="currentColor"
          />
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
