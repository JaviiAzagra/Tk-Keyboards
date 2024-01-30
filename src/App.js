import { Route, Routes, useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Switch from "./Components/Switchs/Switch";
import Keycaps from "./Components/Keycaps/Keycaps";
import Keyboards from "./Components/Keyboards/Keyboards";
import Accessories from "./Components/Accessories/Accessories";
import Profile from "./Pages/Profile/Profile";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { checkSession } from "./Redux/auth/auth.actions";
import KeyboardsDetail from "./Components/KeyboardsDetail/KeyboardsDetail";
import Contact from "./Pages/Contact/Contact";
import GoTop from "./Components/GoTop/GoTop";
import Support from "./Pages/Support/Support";
import History from "./Pages/History/History";
import { Cart } from "./Components/Cart/Cart";
import ProductsDetail from "./Components/ProductsDetail/ProductsDetail";
import Popup from "./Components/Popup/Popup";
import Chat from "./Components/Chat/Chat";
import Order from "./Components/Order/Order";
import Chatgotop from "./Components/ChatGotop/Chatgotop";
import OrderForm from "./Pages/OrderForm/OrderForm";
import Shipping from "./Components/Shipping/Shipping";
import Layout75 from "./Components/Layout75/Layout75";
import Layout80 from "./Components/Layout80/Layout80";
import Layout100 from "./Components/Layout100/Layout100";
import ProfileCherry from "./Components/ProfileCherry/ProfileCherry";
import ProfileAsa from "./Components/ProfileAsa/ProfileAsa";
import ProfileOem from "./Components/ProfileOem/ProfileOem";
import Clicky from "./Components/SwitchType/Clicky";
import Tactile from "./Components/SwitchType/Tactile";
import Linear from "./Components/SwitchType/Linear";
import Mouse from "./Components/AccessoriesType/Mouse";
import Mousepad from "./Components/AccessoriesType/Mousepad";
import CoiledCable from "./Components/AccessoriesType/CoiledCable";
import Stabilizer from "./Components/AccessoriesType/Stabilizer";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  useEffect(() => {
    // Cargar carrito desde localStorage al inicio
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
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

  const agregarAlCarrito = (producto, cantidad = 1) => {
    const productoExistente = carrito.find((item) => item._id === producto._id);

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualizar cantidad y precio total
      const carritoActualizado = carrito.map((item) =>
        item._id === producto._id
          ? {
              ...item,
              cantidad: item.cantidad + cantidad,
              precioTotal: (item.cantidad + cantidad) * item.price,
            }
          : item
      );
      setCarrito(carritoActualizado);
      localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad proporcionada
      const nuevoCarrito = [
        ...carrito,
        { ...producto, cantidad, precioTotal: cantidad * producto.price },
      ];
      setCarrito(nuevoCarrito);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    }
  };

  const modificarcantidadencarrito = (productId, newQuantity) => {
    const nuevoCarrito = carrito.map((item) =>
      item._id === productId
        ? { ...item, cantidad: parseInt(newQuantity, 10) }
        : item
    );
    setCarrito(nuevoCarrito);
  };

  const calcularPrecioTotal = () => {
    const total = carrito.reduce(
      (totalAcumulado, producto) => totalAcumulado + producto.precioTotal,
      0
    );
    // Utiliza toFixed para redondear a dos decimales
    return parseFloat(total.toFixed(2));
  };

  const limpiarLocalStorage = () => {
    localStorage.removeItem("carrito");
  };

  const borrarCarrito = () => {
    setCarrito([]);

    // Limpiar localStorage
    limpiarLocalStorage();
  };

  const borrarProducto = (productoId) => {
    const carritoActualizado = carrito.filter(
      (item) => item._id !== productoId
    );
    setCarrito(carritoActualizado);

    // Actualizar el localStorage después de la eliminación
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
  };

  useEffect(() => {
    const popupClosed = localStorage.getItem("popupClosed");
    if (!popupClosed) {
      setShowPopup(true);
      localStorage.setItem("popupClosed", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Analytics />
      <Navbar
        carrito={carrito}
        calcularPrecioTotal={calcularPrecioTotal}
        borrarProducto={borrarProducto}
      />
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products agregarAlCarrito={agregarAlCarrito} />}
        />
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
        <Route
          path="/products/switches"
          element={<Switch agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/keyboards"
          element={<Keyboards agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/keycaps"
          element={<Keycaps agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/accessories"
          element={<Accessories agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/75-percent-layout-keyboards"
          element={<Layout75 agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/80-tkl-keyboards"
          element={<Layout80 agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/100-full-size-keyboards"
          element={<Layout100 agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/cherry-keycap"
          element={<ProfileCherry agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/asa-keycap"
          element={<ProfileAsa agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/oem-keycap"
          element={<ProfileOem agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/click-height-keycap-sets"
          element={<Clicky agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/tactile-switches"
          element={<Tactile agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/linear-switches"
          element={<Linear agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/mouse"
          element={<Mouse agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/mousepad"
          element={<Mousepad agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/coiled-cable"
          element={<CoiledCable agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/products/stabilizer"
          element={<Stabilizer agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/products/id/:id"
          element={
            <ProductsDetail
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/order-confirmation"
          element={
            <Order
              carrito={carrito}
              calcularPrecioTotal={calcularPrecioTotal}
              borrarCarrito={borrarCarrito}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <OrderForm
              carrito={carrito}
              calcularPrecioTotal={calcularPrecioTotal}
            />
          }
        />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Chatgotop />
      <Footer />
    </div>
  );
}

export default App;
