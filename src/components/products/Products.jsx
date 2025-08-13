import React, { useState, useMemo } from "react";
import ProductCard from "../../shared/ProductCard";
import { productsObject } from "../../shared/productsObject";
import {
  MagnifyingGlass,
  Funnel,
  ArrowUp,
  ArrowDown,
} from "@phosphor-icons/react";
import "./Products.css";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default"); // 'default', 'lowToHigh', 'highToLow'

  // Get all unique categories from the productsObject
  const categories = useMemo(() => ["All", ...Object.keys(productsObject)], []);

  // Filter products based on active category and search term
  const filteredProducts = useMemo(() => {
    let products = [];
    if (activeCategory === "All") {
      Object.values(productsObject).forEach((category) => {
        products = [...products, ...category];
      });
    } else {
      products = productsObject[activeCategory] || [];
    }

    if (searchTerm) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return products;
  }, [activeCategory, searchTerm]);

  // Sort products based on the selected sort order
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortOrder === "lowToHigh") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/R|,/g, ""));
        const priceB = parseFloat(b.price.replace(/R|,/g, ""));
        return priceA - priceB;
      });
    } else if (sortOrder === "highToLow") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/R|,/g, ""));
        const priceB = parseFloat(b.price.replace(/R|,/g, ""));
        return priceB - priceA;
      });
    }
    return sorted;
  }, [filteredProducts, sortOrder]);

  return (
    <section className="products-page">
      <h1 className="products-heading">Our Products</h1>

      {/* Product Controls: Search, Filter, and Sort */}
      <div className="product-controls">
        {/* Search Bar */}
        <div className="search-bar-container">
          <MagnifyingGlass size={24} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter by Category */}
        <div className="filter-container">
          <Funnel size={24} className="filter-icon" />
          <select
            className="filter-select"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by Price */}
        <div className="sort-container">
          <label htmlFor="sort-select" className="sort-label">
            Sort by Price:
          </label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          {sortOrder === "lowToHigh" ? (
            <ArrowUp size={20} className="sort-arrow" />
          ) : sortOrder === "highToLow" ? (
            <ArrowDown size={20} className="sort-arrow" />
          ) : null}
        </div>
      </div>

      {/* Product List */}
      <div className="product-list">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products-found">
            No products match your search or filter criteria.
          </p>
        )}
      </div>
    </section>
  );
}
