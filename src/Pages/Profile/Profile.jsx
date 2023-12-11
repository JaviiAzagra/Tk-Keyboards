import React from "react";
import Login2 from "../../Components/Login2/Login2";
import { useSelector } from "react-redux";
import "./Profile.scss";
import User from "../../Components/User/User";

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <div>
      {!user && <Login2 type="login" />}
      {user && <User />}
    </div>
  );
};

export default Profile;
