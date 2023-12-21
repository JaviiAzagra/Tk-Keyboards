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
import Accessories from "./Components/Accessories/Accessories";
import AccessoriesDetail from "./Components/AccessoriesDetail/AccessoriesDetail";
import Support from "./Pages/Support/Support";
import History from "./Pages/History/History";
import { Cart } from "./Components/Cart/Cart";
import ProductsDetail from "./Components/ProductsDetail/ProductsDetail";

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

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Obtener productos de la API (reemplaza la URL con tu API real)
    fetch("https://tkkeyboards-api.vercel.app/products")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const calcularPrecioTotal = () => {
    const total = carrito.reduce(
      (totalAcumulado, producto) => totalAcumulado + producto.price,
      0
    );
    // Utiliza toFixed para redondear a dos decimales
    return parseFloat(total.toFixed(2));
  };

  const borrarCarrito = () => {
    setCarrito([]);
  };

  const borrarProducto = (productoId) => {
    const carritoActualizado = carrito.filter((item) => item.id !== productoId);
    setCarrito(carritoActualizado);
  };
  return (
    <div className="App">
      <GoTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<History />} />
        <Route
          path="/cart"
          element={
            <Cart
              carrito={carrito}
              calcularPrecioTotal={calcularPrecioTotal}
              borrarCarrito={borrarCarrito}
              borrarProducto={borrarProducto}
            />
          }
        />
        <Route path="/products/switches" element={<Switch />} />
        <Route path="/products/keyboards" element={<Keyboards />} />
        <Route path="/products/keycaps" element={<Keycaps />} />
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/products/:id"
          element={
            <ProductsDetail
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/products/keyboards/:id"
          element={
            <KeyboardsDetail
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/products/switches/:id"
          element={
            <SwitchesDetail
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/products/keycaps/:id"
          element={
            <KeycapsDetail
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/products/accessories/:id"
          element={
            <AccessoriesDetail
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
