import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Coins,
  ShoppingCartSimple,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const handleAddToCart = () => {
    addToCart(product);

    // Visual feedback
    const button = document.querySelector(
      `.add-to-cart-btn[data-id="${product.id}"]`
    );
    if (button) {
      button.classList.add("added");
      setTimeout(() => button.classList.remove("added"), 500);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="product-image"
        />
        {product.images.length > 1 && (
          <>
            <button onClick={prevImage} className="image-nav-btn left-btn">
              <CaretLeft size={24} />
            </button>
            <button onClick={nextImage} className="image-nav-btn right-btn">
              <CaretRight size={24} />
            </button>
          </>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <div className="price-container">
            <Coins size={20} className="icon price-icon" />
            <p className="product-price">{product.price}</p>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            data-id={product.id}
          >
            <ShoppingCartSimple size={20} className="icon cart-icon" />
            <span className="btn-text">Add to Cart</span>
            <span className="added-text">Added!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
