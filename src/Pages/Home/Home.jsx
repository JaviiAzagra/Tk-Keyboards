import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shipping from "../../Components/Shipping/Shipping";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { t } from "i18next";
import RecentlyProducts from "../../Components/RecentlyProducts/RecentlyProducts";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkkeyboards-api.vercel.app/products`
        );

        // Filter only the keyboards from the API response
        const keyboardsData = response.data.filter(
          (item) => item.type === "keyboards"
        );

        setData(keyboardsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="home">
      <section className="slider">
        <Slider {...sliderSettings}>
          <div className="home--top">
            <img src="/assets/homeimg1.jpg" alt="img1" />
            <div className="textsuperpuesto">
              <h1>Tanjirou 5108B Plus</h1>
              <Link to="/products/65b0327437c67320a5a74303">Shop Now</Link>
            </div>
          </div>
          <div className="home--top">
            <img src="/assets/homeimg2.jpg" alt="img2" />
            <div className="textsuperpuesto">
              <h1>Taiko no Tatsujin 5108S</h1>
              <Link to="/products/65b0327537c67320a5a74309">Shop Now</Link>
            </div>
          </div>
          <div className="home--top">
            <img src="/assets/homeimg3.jpg" alt="img3" />
            <div className="textsuperpuesto">
              <h1>Akko V3 Silver Pro Switch</h1>
              <Link to="/products/65b0327437c67320a5a74302">Shop Now</Link>
            </div>
          </div>
          <div className="home--top">
            <img src="/assets/homeimg4.jpg" alt="img4" />
            <div className="textsuperpuesto">
              <h1>Wavez Keycap Set</h1>
              <Link to="/products/65b0327437c67320a5a74306">Shop Now</Link>
            </div>
          </div>
        </Slider>
      </section>
      <section className="home--mid">
        <h3>Building Your First Mechanical Keyboard is Easier Than Ever</h3>
        <div className="home--mid__products">
          <div className="home--mid__products--left">
            <Link to="/products">
              <div className="home--mid__products--mid">
                <img src="/assets/allproductstitle.png" alt="keycaps" />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">All Products</h4>
              </div>
            </Link>
          </div>
          <div className="home--mid__products--right">
            <Link to="/products/keyboards">
              <div className="container">
                <img
                  className="img"
                  src="/assets/tecladotitle.png"
                  alt="keycaps"
                />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Keyboards</h4>
              </div>
            </Link>
            <Link to="/products/accessories">
              <div className="container">
                <img
                  className="img"
                  src="/assets/accessoriestitle.jpg "
                  alt="keycaps"
                />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Accesories</h4>
              </div>
            </Link>
            <Link to="/products/keycaps">
              <div className="container">
                <img
                  className="img"
                  src="/assets/keycapstitle.jpg"
                  alt="keycaps"
                />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Keycaps</h4>
              </div>
            </Link>
            <Link to="/products/switches">
              <div className="container">
                <img
                  className="img"
                  src="/assets/switchestitle"
                  alt="keycaps"
                />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Switches</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="featurekeyboards">
        <div className="featurekeyboards--title">
          <h1>Feature Keyboards</h1>
          <Link to="/products/keyboards">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-arrow-right-filled"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
        <div className="featurekeyboards--container">
          {loading ? (
            <Loader />
          ) : data && data.length > 0 ? (
            data.map((keyboard) => (
              <div
                style={{ marginBottom: "30px" }}
                className="keyboards--cards"
                onClick={() => navigate(`/products/${keyboard?._id}`)}
                key={keyboard._id}
              >
                <div className="keyboards--cards__img">
                  <img src={keyboard?.img} alt={keyboard?.name} />
                </div>
                <div className="keyboards--cards__text">
                  <p
                    style={{ maxWidth: "300px" }}
                    className="keyboards--cards__text--name"
                  >
                    {keyboard?.name}
                  </p>
                  <p className="keyboards--cards__text--brand">
                    {keyboard?.brand}
                  </p>
                  <p className="keyboards--cards__text--price">
                    {keyboard?.price.toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      style: "currency",
                      currency: "EUR",
                    })}{" "}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No keyboards available.</p>
          )}
        </div>
      </div>
      <div className="features">
        <h1>Signature Features</h1>
        <div className="features--container">
          <div className="features--container__section">
            <div className="features--container__section--img">
              <img src="/assets/featuresimg.jpg" alt="featuresimg" />
            </div>
            <div className="features--container__section--text">
              <h2>Wireless & Wired</h2>
              <p>
                Connect the keyboard with up to 3 devices via Bluetooth or to a
                single device with the USB Type-C wired option. Pair it up with
                your smartphone, laptop and iPad, and switch amongst the devices
                swiftly, that is best for home, office and light gaming uses.{" "}
              </p>
            </div>
          </div>

          <div className="features--container__sectionreverse">
            <div className="features--container__sectionreverse--img">
              <img src="/assets/featuresimg3.jpg" alt="featuresimg" />
            </div>
            <div className="features--container__sectionreverse--text">
              <h2>Customization</h2>
              <p>
                Customization options for users, such as interchangeable keys,
                customizable LED lighting, or the ability to laser engrave the
                keyboard with a unique design.
              </p>
            </div>
          </div>

          <div className="features--container__section">
            <div className="features--container__section--img">
              <img src="/assets/featuresimg2.jpg" alt="featuresimg" />
            </div>
            <div className="features--container__section--text">
              <h2>Compatible With All Devices</h2>
              <p>
                Keyboards are 100% compatible with multiple operating systems.
                Perfectly suitable for macOS, Windows, iOS, as well as Android.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Shipping />
    </div>
  );
};

export default Home;
