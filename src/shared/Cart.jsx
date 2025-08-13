// src/components/Cart.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { X, Plus, Minus, ShoppingCart } from "@phosphor-icons/react";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace(/R|,/g, "")) * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0; // Flat shipping rate
  const total = subtotal + shipping;

  return (
    <section className="cart-page">
      <h1 className="cart-heading">Your Shopping Cart</h1>

      {cartCount === 0 ? (
        <div className="empty-cart">
          <ShoppingCart size={64} className="empty-cart-icon" />
          <p className="empty-cart-message">Your cart is empty</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image-container">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="item-image"
                  />
                </div>

                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-heading">Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>R{shipping.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>R{total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/products" className="continue-shopping-link">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
