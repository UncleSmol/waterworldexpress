import React from "react";
import { MapPin, Phone, Envelope } from "@phosphor-icons/react";
import { useSpring, animated } from "@react-spring/web";

import "./ContactUs.css"; // Ensure this CSS file exists

export default function ContactUs() {
  const formProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 200,
  });

  const infoProps = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 400,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Form submitted!");
  };

  return (
    <section className="contact-us-page">
      <h1 className="contact-us-heading">Contact Us</h1>
      <p className="contact-us-subheading">
        Have a question or need assistance? We're here to help! Fill out the
        form below or use our contact details to get in touch.
      </p>
      <div className="contact-container">
        {/* Contact Form Section */}
        <animated.div className="contact-form-container" style={formProps}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="form-heading">Send us a message</h2>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </animated.div>

        {/* Contact Info and Map Section */}
        <animated.div className="contact-info-container" style={infoProps}>
          <div className="contact-details">
            <h2 className="details-heading">Our Contact Details</h2>
            <div className="info-item">
              <MapPin size={24} className="info-icon" />
              <p className="info-text">
                Head Office: 123 Water Street, Sandton, Johannesburg, 2196
              </p>
            </div>
            <div className="info-item">
              <Phone size={24} className="info-icon" />
              <p className="info-text">+27 11 123 4567</p>
            </div>
            <div className="info-item">
              <Envelope size={24} className="info-icon" />
              <p className="info-text">info@waterworldexpress.co.za</p>
            </div>
          </div>
          <div className="map-embed-container">
            <h2 className="map-heading">Find Us Here</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14330.407141517036!2d28.04944521405021!3d-26.096739601332496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957388d021c977%3A0xc395f242d2a4501a!2sSandton%2C%20Johannesburg%2C%202196!5e0!3m2!1sen!2sza!4v1628765432109!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location of Water World Express"
            />
          </div>
        </animated.div>
      </div>
    </section>
  );
}
