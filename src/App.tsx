import { useState } from "react";
import "./App.css";

import banner from "./assets/banner.png";
import star from "./assets/star.svg";

const FOOTER_TEXTS = [
  "clothes",
  "makeup",
  "jewelry",
  "candles",
  "ideas",
  "decor",
  "skincare",
  "accessories",
  "home",
];

function App() {
  const [email, setEmail] = useState("");
  console.log("test");

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1 className="title">SKYLIST</h1>
        </header>
      </div>

      <main className="main container">
        <h2 className="main-title">Create your own Wishlist</h2>

        <section className="section">
          <div className="section-left">
            <p className="section-left-description">
              Skylist is a social platform designed for online shopping,
              allowing all users to simply curate, organize, personalize, and
              share shoppable lists using external links.
            </p>

            <div className="section-left-buttons">
              <div className="section-left-buttons-item">
                <input
                  value={email}
                  className="button button-outlined input"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="button" onClick={() => setEmail("")}>
                Join waitlist
              </button>
            </div>
          </div>
          <div className="section-right">
            <h2 className="main-title">for every occasion</h2>
            <img src={banner} alt="Laptops" className="section-right-banner" />
          </div>
        </section>
      </main>
      <footer className="footer">
        {FOOTER_TEXTS.map((text, index) => {
          const isLastText = index === FOOTER_TEXTS.length - 1;

          return (
            <>
              <p key={text} className="footer-text">
                {text}
              </p>
              {!isLastText ? <img src={star} /> : null}
            </>
          );
        })}
      </footer>
    </div>
  );
}

export default App;
