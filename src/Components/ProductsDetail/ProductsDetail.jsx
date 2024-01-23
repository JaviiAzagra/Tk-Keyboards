import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormOpinions from "../FormOpinions/FormOpinions";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsDetail = ({ productos, agregarAlCarrito }) => {
  const [product, setProduct] = useState();
  const [opinion, setOpinion] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/products/${id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchOpinion = async () => {
      const { data } = await axios.get(
        `https://tkkeyboards-api.vercel.app/opinions`
      );
      setOpinion(data);
    };
    fetchOpinion();
  }, []);

  const notify = () =>
    toast.success("Added to your cart!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleAddToCart = (product) => {
    agregarAlCarrito(product);
    notify();
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--container">
        <div className="keyboardsdetail--container__img">
          <img src={product?.img} alt={product?.name} />
        </div>
        <div className="keyboardsdetail--container__text">
          <div className="keyboardsdetail--container__text--top">
            <p style={{ fontWeight: "300" }}>{product?.brand}</p>
            <h1>{product?.name}</h1>
            <div style={{ display: "flex", gap: "6px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              8 Reviews
            </div>

            <p>${product?.price.toFixed(2)}</p>
            <p style={{ fontWeight: "300", fontSize: "16px" }}>
              Tax excluded. Shipping and VAT calculated at checkout.
            </p>
          </div>
          {product?.switchType && (
            <div className="type">
              <p>
                Type: <span>{product?.switchType}</span>
              </p>

              <p className="type--p">{product?.switchType}</p>
            </div>
          )}
          {product?.switch && (
            <div className="type">
              <p>
                Switch: <span>{product?.switch}</span>
              </p>
              <p className="type--p">{product?.switch}</p>
            </div>
          )}
          {product?.layout && (
            <div className="type">
              <p>
                Layout: <span>{product?.layout}</span>
              </p>
              <p className="type--p">{product?.layout}</p>
            </div>
          )}
          <div className="quantity-container">
            <p>Quantity: </p>
            <div className="quantity-input-container">
              <button className="quantity-button" onClick={handleDecrement}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                readOnly
                className="quantity-input"
              />
              <button className="quantity-button" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div className="stock">
            <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg
                role="presentation"
                focusable="false"
                stroke-width="2"
                width="18"
                height="18"
                class="icon icon-success"
                viewBox="0 0 18 18"
              >
                <path
                  d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5 8.8L7.62937 11.6L13 6"
                  stroke="#ffffff"
                  fill="none"
                ></path>
              </svg>{" "}
              In Stock
            </p>
          </div>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          <p>
            Akko x Designer EnjoyInMySec official Wavez keycap set; The
            comprehensive 226-key is designed to fit all keyboard layouts;
            Featuring PBT material and ASA profile for enhanced durability and a
            comfortable typing experience.
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="keyboardsdetail--description">
        <h1>Description</h1>
        {product?.type === "keyboards" && (
          <>
            <p>
              <span>High-Performance Ergonomic Keyboard</span>
            </p>
            <p>
              Immerse yourself in the ultimate typing experience with our
              high-performance ergonomic keyboard. Precision-engineered and
              meticulously designed, this keyboard seamlessly blends style and
              functionality to deliver an outstanding user experience.
            </p>
            <span>Key Features:</span>
            <ol>
              <li>
                <span>Ergonomic Design: </span>Its ergonomic design ensures a
                natural hand and wrist position, reducing fatigue during
                extended typing sessions.
              </li>
              <li>
                <span>Customizable LED Backlighting: </span>Personalize your
                keyboard's lighting with a wide range of colors and effects.
                Work or play in any environment with comfort and style.
              </li>
              <li>
                <span>Silent and Responsive Keys: </span>Experience the
                smoothness and tactile feedback of our silent keys, perfect for
                uninterrupted and fluid typing.
              </li>
              <li>
                <span>Durable Construction: </span>Crafted with high-quality
                materials, this keyboard is built to withstand daily use,
                ensuring long-term durability.
              </li>
              <li>
                <span>Quick Access Keys: </span>Swiftly access key functions
                with shortcut keys that streamline navigation and enhance
                productivity.
              </li>
              <li>
                <span>Versatile Connectivity: </span>Compatible with a variety
                of devices, this keyboard easily connects to your computer,
                laptop, or tablet, providing flexibility in your workspace.
              </li>
              <li>
                <span>Sleek and Compact Design: </span>With a slim and stylish
                profile, this keyboard takes up minimal space on your desk,
                adding a modern touch to your workstation.
              </li>
            </ol>
            <p>
              Choose a keyboard that not only meets your performance needs but
              also elevates your typing experience. Discover the perfect balance
              between form and function with our high-performance ergonomic
              keyboard.
            </p>
            <img
              src="/assets/descriptionkeyboard.png"
              alt="descriptionkeyboard"
            />
          </>
        )}
        {product?.type === "keycaps" && (
          <>
            <p>
              <span>Premium Keycaps for Ultimate Typing Experience</span>
            </p>
            <p>
              Unleash your keyboard's potential with our premium keycaps,
              meticulously crafted to elevate your typing experience. Designed
              for durability, aesthetics, and customization, these keycaps are
              the perfect addition to any keyboard enthusiast's setup.
            </p>
            <span>Key Features:</span>
            <ol>
              <li>
                <span>High-Quality Material: </span>Crafted from top-grade
                materials, our keycaps ensure durability and longevity,
                providing a superior typing feel that withstands the test of
                time.
              </li>
              <li>
                <span>Stylish Profile Options: </span>Choose from various
                profile options, including OEM, Cherry, and SA profiles, to
                match your preferred typing style and aesthetics. Each profile
                offers a unique feel and look to suit your individual taste.
              </li>
              <li>
                <span>Customizable Colors and Designs: </span>Personalize your
                keyboard with a wide array of colors and designs. Whether you
                prefer a sleek monochrome look or a vibrant, multi-colored
                palette, our keycaps allow you to express your style.
              </li>
              <li>
                <span>Backlit Compatibility: </span>Illuminate your keyboard
                with ease. Our keycaps are designed to be compatible with
                backlighting, allowing you to showcase your keyboard's lighting
                effects for an enhanced visual experience.
              </li>
              <li>
                <span>Easy Installation: </span>Upgrade your keyboard
                effortlessly with our keycaps, designed for simple installation
                on a variety of mechanical keyboards. Transform your keyboard
                into a personalized masterpiece in minutes.
              </li>
              <li>
                <span>Versatile Keycap Sets: </span>Choose from full keycap sets
                or individual keycaps to tailor your keyboard to your liking.
                Whether you're replacing a single key or giving your entire
                keyboard a facelift, our sets provide flexibility.
              </li>
              <li>
                <span>Double-Shot Injection Molding: </span>Experience legends
                and characters that won't fade away. Our double-shot injection
                molding process creates keycaps with engraved legends for
                long-lasting, clear visibility.
              </li>
            </ol>

            <p>
              Enhance your typing experience with our premium keycaps, where
              quality meets customization. Elevate your keyboard aesthetics,
              improve tactile feedback, and make each keystroke a delight with
              our meticulously designed keycaps.
            </p>
            <img
              src="/assets/keycapsdescription.png"
              alt="keycapsdescripcion"
            />
          </>
        )}
        {product?.type === "switches" && (
          <>
            <p>
              <span>
                Key Switches for Keyboards: Exceptional Performance and
                Customization
              </span>
            </p>
            <p>
              Immerse yourself in an unparalleled typing experience with our
              advanced keyboard key switches, meticulously designed to deliver
              exceptional performance and tailor-made customization.
            </p>
            <span>Key Features:</span>
            <ol>
              <li>
                <span>Precision Mechanical Switches: </span>Experience precise
                tactile feedback and superior durability with our cutting-edge
                mechanical key switches. Each keystroke feels crisp, providing a
                satisfying typing experience.
              </li>
              <li>
                <span>Tactile Feedback Options: </span>Choose from a variety of
                switches with different levels of tactile feedback, ranging from
                linear for smooth keystrokes to tactile for a more perceptible
                response. Tailor your typing experience to your preferences.
              </li>
              <li>
                <span>Extended Lifespan: </span>Enjoy an extended lifespan with
                switches engineered to withstand millions of keystrokes. This
                ensures consistent and reliable performance, even in
                high-intensity usage scenarios.
              </li>
              <li>
                <span>Integrated RGB Lighting: </span>Elevate your setup with
                switches that feature integrated RGB lighting. Customize the
                look of your keyboard with a wide range of colors and effects,
                adding a unique visual flair to your workspace.
              </li>
              <li>
                <span>Silent or Clicky Switches: </span>Choose between silent
                switches for discreet typing or clicky switches for distinctive
                auditory feedback. We adapt the experience to suit your
                individual preference.
              </li>
              <li>
                <span>Universal Compatibility: </span>Our switches are
                compatible with a variety of keyboards, providing you with the
                flexibility to integrate them into your preferred device,
                whether for work, gaming, or both.
              </li>
              <li>
                <span>Durable and Dust-Resistant Design: </span>Constructed with
                high-quality materials and a dust-resistant design, our switches
                ensure long-lasting and reliable performance, minimizing
                maintenance and extending the lifespan of your keyboard.
              </li>
            </ol>
            <img
              src="/assets/switchesdescripcion.png"
              alt="switchesdescripcion"
            />
          </>
        )}
        {product?.type === "accessories" && (
          <>
            <p>
              <span>Keyboard Accessories for Enhanced Functionality</span>
            </p>
            <p>
              Elevate your typing experience with our premium range of keyboard
              accessories designed to optimize functionality and add a touch of
              convenience to your setup.
            </p>
            <ol>
              <li>
                <span>Wrist Rest Pad: </span>Improve comfort during extended
                typing sessions with our ergonomic wrist rest pad. Its plush
                cushioning provides excellent support for wrists, reducing
                strain and promoting a more relaxed typing posture.
              </li>
              <li>
                <span>Keycap Puller and Cleaning Kit: </span>Maintain the
                pristine condition of your keyboard with our keycap puller and
                cleaning kit. Effortlessly remove and clean individual keys,
                ensuring a hygienic and smooth typing surface.
              </li>
              <li>
                <span>Cable Management Clips: </span>Say goodbye to tangled
                cables with our cable management clips. Keep your workspace neat
                and organized by securing keyboard cables in place, preventing
                clutter and enhancing overall aesthetics.
              </li>
              <li>
                <span>Keyboard Cover: </span>Protect your keyboard from spills,
                dust, and daily wear with our keyboard cover. Made from
                high-quality materials, it offers a layer of defense without
                compromising on the tactile feel of your keys.
              </li>
            </ol>
            <img
              src="/assets/descriptionkeyboard.png"
              alt="descriptionkeyboard"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsDetail;
