import React from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import { selectCartCount } from "./CartSlice.jsx";

function Navbar() {
  const count = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-icon">✿</span>
        <span>Paradise <em>Nursery</em></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <a href="/#about">About</a>
        <NavLink className="cart-nav" to="/cart">
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">BRING NATURE HOME</p>
          <h1>A greener home<br />starts <em>here.</em></h1>
          <p className="hero-copy">
            Find your perfect plant companion. Thoughtful greenery, happy spaces,
            and a little more calm in every corner.
          </p>
          <button className="button hero-button" onClick={() => navigate("/plants")}>
            Get Started <span aria-hidden="true">→</span>
          </button>
          <div className="hero-note"><span>✳</span> Good things grow here.</div>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-circle"></div>
          <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1100&q=85" alt="" />
          <div className="floating-label">A breath of fresh air</div>
        </div>
      </section>
      <AboutUs />
      <section className="home-cta">
        <p className="eyebrow">YOUR NEXT FAVOURITE PLANT AWAITS</p>
        <h2>Make room for something green.</h2>
        <button className="button" onClick={() => navigate("/plants")}>Explore Plants →</button>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer">
        <Link to="/" className="footer-brand">Paradise Nursery</Link>
        <span>Grow something wonderful.</span>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </>
  );
}