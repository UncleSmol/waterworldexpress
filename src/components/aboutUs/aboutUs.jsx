import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Storefront } from "@phosphor-icons/react";

import "./AboutUs.css";

const AboutUs = () => {
  // Animation for sections
  const sectionProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  return (
    <div className="about-us">
      {/* About Section */}
      <animated.section className="about-section" style={sectionProps}>
        <h1 className="about-heading">About Water World Witbank</h1>
        <p className="about-paragraph">
          Water World Witbank is a proudly South African enterprise committed to
          providing pure, high-quality drinking water to the eMalahleni
          community. Established in 2010, our Witbank store serves homes and
          businesses in Mpumalanga with dedication to health, hydration, and
          sustainability. Our mission is to ensure every resident of eMalahleni
          has access to clean, safe, and affordable water, reflecting our
          commitment to the well-being of our vibrant town.
        </p>
        <p className="about-paragraph">
          Our water is sourced from pristine springs and purified using advanced
          reverse osmosis and UV purification technologies, ensuring it exceeds
          the stringent standards set by the South African Bureau of Standards
          (SABS). Inspired by local icons like aQuellé and Oasis Water, we
          champion sustainability by offering eco-friendly refill stations at
          our Witbank store to reduce plastic waste, aligning with eMalahleni’s
          vision for a greener future. Whether it’s bottled water, dispensers,
          or refills, we cater to your hydration needs with a focus on quality
          and accessibility.
        </p>
        <p className="about-paragraph">
          At Water World Witbank, we’re more than just a water shop—we’re a
          community partner. We support local initiatives, from sponsoring
          school sports in eMalahleni to partnering with environmental campaigns
          in Mpumalanga. Our dedicated team welcomes walk-in customers to our
          store, providing a friendly and reliable in-store experience. Visit us
          at 123 Mandela Drive and experience the Water World Witbank
          difference.
        </p>
        <Storefront className="about-icon" size={48} weight="duotone" />
      </animated.section>

      {/* Our Commitment Section */}
      <animated.section className="commitment-section" style={sectionProps}>
        <h2 className="commitment-heading">Our Commitment to eMalahleni</h2>
        <p className="commitment-paragraph">
          At Water World Witbank, we are deeply rooted in the eMalahleni
          community. Our store at 123 Mandela Drive is your go-to destination
          for pure, refreshing water, available exclusively through walk-in
          services. We pride ourselves on creating a welcoming environment where
          customers can purchase bottled water, eco-friendly dispensers, or
          refill their own containers with our ultra-purified water for just R5
          per liter.
        </p>
        <p className="commitment-paragraph">
          Sustainability is at the heart of what we do. Our refill stations help
          reduce plastic waste, contributing to a cleaner eMalahleni. We also
          engage with local schools, sports teams, and environmental initiatives
          to foster a healthier, more sustainable community. Our friendly staff
          is always ready to assist, ensuring you leave our store with the
          highest quality water and a smile. Come visit us today and join
          thousands of satisfied customers who trust Water World Witbank for
          their daily hydration needs.
        </p>
        <Storefront className="commitment-icon" size={48} weight="duotone" />
      </animated.section>
    </div>
  );
};

export default AboutUs;
