import React from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  Drop,
  Storefront,
  MapPin,
  Phone,
  Envelope,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

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
        <h1 className="hero-heading">Welcome to Water World Witbank</h1>
        <p className="hero-subheading">
          Proudly Serving eMalahleni: Providing Pure, Refreshing Water to Our
          Community
        </p>
        <Drop size={64} className="hero-icon" weight="fill" />
        <Link to="/products" className="order-button">
          See Our Products
        </Link>
      </animated.header>
      {/* About Section */}
      <animated.section className="about-section" style={sectionProps}>
        <h2 className="section-heading">About Us</h2>
        <p className="about-paragraph">
          Water World Witbank is your trusted local water shop in eMalahleni,
          dedicated to providing high-quality, purified drinking water to homes
          and businesses in Mpumalanga. Sourced from pristine springs and
          purified using state-of-the-art technology, our water meets the
          highest standards set by the South African Bureau of Standards (SABS).
          Our Witbank outlet serves the local community with convenient access
          to hydration, focusing on sustainability with refill stations to
          reduce plastic waste in our vibrant town.
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
              our Witbank store for just R5 per liter.
            </p>
          </li>
        </ul>
      </animated.section>

      {/* Services Section */}
      <animated.section className="services-section" style={sectionProps}>
        <h2 className="section-heading">Our Services</h2>
        <p className="services-paragraph">
          Visit our Witbank store for convenient walk-in services. Purchase
          bottled water, water dispensers, or refill your own containers with
          our ultra-purified water. Our friendly staff is ready to assist you
          with all your hydration needs in eMalahleni. We currently offer
          in-store services only, ensuring you get high-quality water directly
          from our outlet.
        </p>
        <Storefront size={48} className="services-icon" weight="duotone" />
      </animated.section>

      {/* Contact Section */}
      <animated.footer className="contact-section" style={sectionProps}>
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-intro">
          Visit our store in Witbank for walk-in purchases and refills. The best
          way to start is to contact our shop owner via email, call, or
          WhatsApp.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <MapPin size={32} className="contact-icon" />
            <p>123 Mandela Drive, Witbank, eMalahleni, Mpumalanga</p>
          </div>
          <div className="contact-item">
            <Phone size={32} className="contact-icon" />
            <p>+27 60 567 9397</p>
          </div>
          <div className="contact-item">
            <Envelope size={32} className="contact-icon" />
            <p>waterworldwitbank@gmail.com</p>
          </div>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Water World Witbank. Proudly serving
          eMalahleni since 2010.
        </p>
      </animated.footer>
    </div>
  );
};

export default Homepage;
