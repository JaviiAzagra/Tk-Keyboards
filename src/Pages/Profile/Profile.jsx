import React from "react";
import Login2 from "../../Components/Login2/Login2";
import { useSelector } from "react-redux";
import "./Profile.scss";

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <div>
      {!user && <Login2 type="login" />}
      {user && <div className="profile"></div>}
    </div>
  );
};

export default Profile;
