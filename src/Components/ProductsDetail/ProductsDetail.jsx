import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = ({ productos, agregarAlCarrito }) => {
  const [product, setProduct] = useState();
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

  return (
    <div className="keyboardsdetail">
      <div className="keyboardsdetail--container">
        <div className="keyboardsdetail--container__img">
          <img src={product?.img} alt={product?.name} />
        </div>
        <div className="keyboardsdetail--container__text">
          <div className="keyboardsdetail--container__text--top">
            <h1>{product?.name}</h1>
            <p>${product?.price.toFixed(2)}</p>
            <p>{product?.brand}</p>
          </div>
          <p>
            Akko x Designer EnjoyInMySec official Wavez keycap set; The
            comprehensive 226-key is designed to fit all keyboard layouts;
            Featuring PBT material and ASA profile for enhanced durability and a
            comfortable typing experience.
          </p>
          {product?.switch && (
            <>
              <p>
                <span>Switch: </span>
                {product?.switch}
              </p>
            </>
          )}
          <button onClick={() => agregarAlCarrito(product)}>Add To Cart</button>
        </div>
      </div>

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
          </>
        )}
        {product?.type === "keycaps" && <>Keycaps</>}
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsDetail;
