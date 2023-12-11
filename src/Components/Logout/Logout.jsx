import React from "react";
import "./Logout.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/auth/auth.actions";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutButton = () => {
    dispatch(logoutUser(navigate));
  };
  return (
    <div className="logout-container">
      <button className="logout-button" onClick={logOutButton}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
