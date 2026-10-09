import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  selectCartItems,
  selectCartTotal,
  updateQuantity
} from "./CartSlice.jsx";

const money = (amount) =>
  `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <main className="page-shell cart-page">
        <div className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">🪴</span>
          <p className="eyebrow">YOUR CART</p>
          <h1>Your cart is ready to grow.</h1>
          <p>You haven't added any plants yet. Find a new leafy friend for your home.</p>
          <Link className="button" to="/plants">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell cart-page">
      <section className="section-heading cart-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>{items.reduce((sum, item) => sum + item.quantity, 0)} plant(s) selected</p>
      </section>
      <div className="cart-layout">
        <section className="cart-list" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-product-info">
                <h2>{item.name}</h2>
                <p>Unit price: {money(item.price)}</p>
                <strong>Item total: {money(item.price * item.quantity)}</strong>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  >+</button>
                </div>
              </div>
              <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <h2>Growing total</h2>
          <div className="summary-line">
            <span>Plants ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
            <span>{money(total)}</span>
          </div>
          <div className="summary-line">
            <span>Delivery</span>
            <span>Calculated later</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>{money(total)}</strong>
          </div>
          <button className="button checkout-button" onClick={() => window.alert("Coming Soon! Checkout is not available in this course project.")}>
            Checkout
          </button>
          <Link className="text-link" to="/plants">← Continue Shopping</Link>
        </aside>
      </div>
    </main>
  );
}