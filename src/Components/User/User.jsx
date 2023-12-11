import React from "react";
import "./User.scss";
import { useSelector } from "react-redux";

const User = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <div className="users">
      <h1>Account</h1>
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
        </div>
      </div>
    </div>
  );
};

export default User;
