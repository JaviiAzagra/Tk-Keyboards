import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="home--top"></section>
      <section className="home--mid">
        <h3>Building Your First Mechanical Keyboard is Easier Than Ever</h3>
        <div className="home--mid__products">
          <div className="home--mid__products--left">
            <Link to="/products/keyboards">
              <div className="container">
                <img className="img" src="/assets/keycaps.jpg" alt="keycaps" />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Keyboards</h4>
              </div>
            </Link>
            <Link to="/products/accessories">
              <div className="container">
                <img className="img" src="/assets/keycaps.jpg" alt="keycaps" />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Accesories</h4>
              </div>
            </Link>
          </div>
          <Link to="/products">
            <div className="home--mid__products--mid">
              <img src="/assets/keyboardhomemid.jpg" alt="keycaps" />
            </div>
          </Link>
          <div className="home--mid__products--right">
            <Link to="/products/keycaps">
              <div className="container">
                <img className="img" src="/assets/keycaps.jpg" alt="keycaps" />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Keycaps</h4>
              </div>
            </Link>
            <Link to="/products/switches">
              <div className="container">
                <img className="img" src="/assets/keycaps.jpg" alt="keycaps" />
                <div class="capa-oscura"></div>
                <h4 className="superpuesto">Switches</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
