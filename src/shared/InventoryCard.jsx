import React, { useState } from "react";
import {
  Coins,
  CheckCircle,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import "./InventoryCard.css";

const InventoryCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="inventory-card">
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
          <div className="availability-badge">
            <CheckCircle size={20} className="icon available-icon" />
            <span className="availability-text">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;