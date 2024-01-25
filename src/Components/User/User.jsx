import React from "react";
import "./User.scss";
import { useSelector } from "react-redux";
import Logout from "../Logout/Logout";
import Shipping from "../Shipping/Shipping";

const User = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="users">
        <h1>Account</h1>
        <Logout />
        <div className="user">
          <div className="user--orders">
            <h3>Order history</h3>
            <p>You haven't placed any orders yet.</p>
          </div>
          <div className="user--detail">
            <h3>Account details</h3>
            <p>
              <span>Email: </span>
              {user?.email}
            </p>
            <p>
              <span>Name: </span>
              {user?.name} {user?.surname}
            </p>
          </div>
        </div>
      </div>
      <Shipping />
    </div>
  );
};

export default User;
