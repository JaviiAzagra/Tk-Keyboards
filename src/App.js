import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Switch from "./Components/Switchs/Switch";
import Keyboards from "./Components/Keyboards/Keyboards";
import Profile from "./Pages/Profile/Profile";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { checkSession } from "./Redux/auth/auth.actions";
import KeyboardsDetail from "./Components/KeyboardsDetail/KeyboardsDetail";
import SwitchesDetail from "./Components/SwitchesDetails/SwitchesDetail";
import Contact from "./Pages/Contact/Contact";
import GoTop from "./Components/GoTop/GoTop";
import Keycaps from "./Components/Keycaps/Keycaps";
import KeycapsDetail from "./Components/KeycapsDetail/KeycapsDetail";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <div className="App">
      <GoTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/switches" element={<Switch />} />
        <Route path="/products/keyboards" element={<Keyboards />} />
        <Route path="/products/keycaps" element={<Keycaps />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/keyboards/:id" element={<KeyboardsDetail />} />
        <Route path="/products/switches/:id" element={<SwitchesDetail />} />
        <Route path="/products/keycaps/:id" element={<KeycapsDetail />} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
