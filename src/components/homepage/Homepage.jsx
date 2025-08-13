import React from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  Drop,
  Truck,
  Storefront,
  MapPin,
  Phone,
  Envelope,
} from "@phosphor-icons/react";

import "./Homepage.css";

const Homepage = () => {
  // Animation for hero section
  const heroProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  // Animation for sections
  const sectionProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
  });

  return (
    <div className="homepage">
      {/* Hero Section */}
      <animated.header className="hero" style={heroProps}>
        <h1 className="hero-heading">Welcome to Water World Express</h1>
        <p className="hero-subheading">
          Proudly South African: Delivering Pure, Refreshing Water Across the
          Rainbow Nation
        </p>
        <Drop size={64} className="hero-icon" weight="fill" />
        <button className="order-button">Order Now</button>
      </animated.header>
      {/* About Section */}
      <animated.section className="about-section" style={sectionProps}>
        <h2 className="section-heading">About Us</h2>
        <p className="about-paragraph">
          Water World Express is a leading South African water shop dedicated to
          providing high-quality, purified drinking water to homes and
          businesses nationwide. Sourced from pristine springs in the Western
          Cape and purified using state-of-the-art technology, our water meets
          the highest standards set by the South African Bureau of Standards
          (SABS). With over 200 outlets across major cities like Johannesburg,
          Cape Town, Durban, and Pretoria, we make hydration accessible and
          affordable. Inspired by local brands like aQuellé and Oasis Water, we
          focus on sustainability, offering refill stations to reduce plastic
          waste in our beautiful country.
        </p>
        <Storefront size={48} className="about-icon" weight="duotone" />
      </animated.section>

      {/* Products Section */}
      <animated.section className="products-section" style={sectionProps}>
        <h2 className="section-heading">Our Products</h2>
        <ul className="products-list">
          <li className="product-item">
            <Drop size={32} className="product-icon primary" />
            <h3 className="product-title">Bottled Water</h3>
            <p className="product-description">
              Pure still and sparkling water in 500ml, 1L, and 5L bottles.
              Starting from R10 per bottle.
            </p>
          </li>
          <li className="product-item">
            <Drop size={32} className="product-icon secondary" />
            <h3 className="product-title">Water Dispensers</h3>
            <p className="product-description">
              Hot and cold dispensers for home or office use. Eco-friendly and
              easy to maintain.
            </p>
          </li>
          <li className="product-item">
            <Drop size={32} className="product-icon tertiary" />
            <h3 className="product-title">Refill Services</h3>
            <p className="product-description">
              Bring your own bottle and refill with our ultra-purified water at
              any of our stores for just R5 per liter.
            </p>
          </li>
        </ul>
      </animated.section>

      {/* Services Section */}
      <animated.section className="services-section" style={sectionProps}>
        <h2 className="section-heading">Our Services</h2>
        <p className="services-paragraph">
          We offer fast and reliable water delivery services throughout South
          Africa. Whether you're in the bustling streets of Gauteng or the
          scenic routes of the Garden Route, our fleet ensures your order
          arrives fresh and on time. Bulk deliveries for events, offices, and
          homes start from R200 for 20L packs. Join thousands of satisfied
          customers who trust us for their daily hydration needs, just like
          popular services such as Aquazania and MANZI Water.
        </p>
        <Truck size={48} className="services-icon" weight="duotone" />
      </animated.section>

      {/* Contact Section */}
      <animated.footer className="contact-section" style={sectionProps}>
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-intro">
          Visit us at our stores in Johannesburg, Cape Town, Durban, and more.
          Or order online for delivery.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <MapPin size={32} className="contact-icon" />
            <p>Head Office: 123 Water Street, Sandton, Johannesburg</p>
          </div>
          <div className="contact-item">
            <Phone size={32} className="contact-icon" />
            <p>+27 11 123 4567</p>
          </div>
          <div className="contact-item">
            <Envelope size={32} className="contact-icon" />
            <p>info@waterworldexpress.co.za</p>
          </div>
        </div>
        <p className="copyright">
          © 2025 Water World Express. Proudly serving South Africa since 2010.
        </p>
      </animated.footer>
    </div>
  );
};

export default Homepage;
