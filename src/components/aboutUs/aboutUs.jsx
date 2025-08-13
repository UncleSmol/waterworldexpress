import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Storefront, MapPin, MagnifyingGlass } from "@phosphor-icons/react";

import "./AboutUs.css"; // Ensure this CSS file exists

const branches = [
  {
    name: "Gezina Branch",
    phone: "0649648498",
    address: "630 Steve Biko Rd, Gezina, Pretoria, 0031",
    mapLink: "https://maps.app.goo.gl/t5W9pJwYuFkvWxk77",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.750448928322!2d28.199188776174076!3d-25.712685277382718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfd8b5b4201775%3A0x17aaa2f06edf5ec4!2s630%20Steve%20Biko%20Rd%2C%20Gezina%2C%20Pretoria%2C%200031!5e0!3m2!1sen!2sza!4v1755071315743!5m2!1sen!2sza",
  },
  {
    name: "Glenvista Branch",
    phone: "0751299832",
    address: "135 Bellairs Dr, Glenvista, Johannesburg South, 2091",
    mapLink: "https://maps.app.goo.gl/CnVkWHptNMhFDfNt8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.250494855932!2d28.055367300000004!3d-26.285978299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95058649a68fc1%3A0x6de4345fa411f8ed!2s135%20Bellairs%20Dr%2C%20Glenvista%2C%20Johannesburg%20South%2C%202091!5e0!3m2!1sen!2sza!4v1755071489855!5m2!1sen!2sza",
  },
  {
    name: "Hatfield Plaza",
    phone: "0656530326",
    address: "1126 Burnett St, Hatfield, Pretoria, 0028",
    mapLink: "https://maps.app.goo.gl/oqAGj31sd2TLPpzTA",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6142110939936!2d28.233694576175115!3d-25.750268577358973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561be98836611%3A0xa48c6cd87bc67e65!2sWater%20World!5e0!3m2!1sen!2sza!4v1755071574007!5m2!1sen!2sza",
  },
  {
    name: "Emalahleni",
    phone: "0606579397",
    address: "Mandela St, eMalahleni, 1035",
    mapLink: "https://maps.app.goo.gl/vn5L3pbMGdJwee6P6",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.868657823857!2d29.232132576178515!3d-25.87379987728167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaf2a1834d1703%3A0x7c45c151e7e3bdd5!2sSaveways%20Crescent%20Centre!5e0!3m2!1sen!2sza!4v1755071662943!5m2!1sen!2sza",
  },
  {
    name: "Tafelkop",
    phone: "0766298800",
    address: "Tafelkop Mall",
    mapLink: "https://maps.app.goo.gl/XCmYG3TeiVc96rgB8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1089902712442!2d29.531885629073678!3d-25.03037505659666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1b70058dc9e6f%3A0x761bf47f643ba5fe!2sTafelkop%20Mall!5e0!3m2!1sen!2sza!4v1755071747398!5m2!1sen!2sza",
  },
  {
    name: "Rustenburg",
    phone: "0721484998",
    address: "33 President Mbeki Dr, East End, Rustenburg, 2999",
    mapLink: "https://maps.app.goo.gl/WHmmzhij66C3HXUf8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4276.9158316169305!2d27.25183119296082!3d-25.656599354458336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe0be524c41b29%3A0xa6eb371101dd2229!2s33%20President%20Mbeki%20Dr%2C%20Rustenburg%20Oos-Einde%2C%20Rustenburg%2C%202999!5e0!3m2!1sen!2sza!4v1755072785232!5m2!1sen!2sza",
  },
  {
    name: "Ryneveld",
    phone: "0810576767",
    address: "31 Fouche Rd, Pierre van Ryneveld Park, Centurion, 0157",
    mapLink: "https://maps.app.goo.gl/4bzT9NUn2kvcweYQ8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.82855953545!2d28.241302876177635!3d-25.842193977301445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9567596ae0a433%3A0x4f88a9421bbbbd42!2sWaterWorld%20Ryneveld!5e0!3m2!1sen!2sza!4v1755072907495!5m2!1sen!2sza",
  },
];

const AboutUs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);

  // Animation for sections
  const sectionProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div className="about-us">
      {/* About Section */}
      <animated.section className="about-section" style={sectionProps}>
        <h1 className="about-heading">About Water World Express</h1>
        <p className="about-paragraph">
          Water World Express is a proudly South African enterprise committed to
          delivering pure, high-quality drinking water to communities across the
          nation. Established in 2010, we have grown from a single store in
          Pretoria to a network of over 200 outlets, serving major cities like
          Johannesburg, Cape Town, Durban, Pretoria, and beyond, including our
          seven key branches in Gezina, Glenvista, Hatfield, Emalahleni,
          Tafelkop, Rustenburg, and Ryneveld. Our mission is to ensure every
          South African has access to clean, safe, and affordable water,
          reflecting our deep-rooted commitment to the health and well-being of
          our Rainbow Nation.
        </p>
        <p className="about-paragraph">
          Our water is sourced from the pristine springs of the Western Cape,
          renowned for their natural purity. Using advanced reverse osmosis and
          UV purification technologies, we ensure our water exceeds the
          stringent standards set by the South African Bureau of Standards
          (SABS). Inspired by local icons like aQuellé and Oasis Water, we
          champion sustainability by offering eco-friendly refill stations to
          reduce plastic waste, aligning with South Africa’s vision for a
          greener future. Whether it’s bottled water, dispensers, or bulk
          deliveries for homes, offices, or events, we cater to diverse needs
          with a focus on quality and accessibility.
        </p>
        <p className="about-paragraph">
          At Water World Express, we’re more than just a water shop—we’re a
          community partner. We support local initiatives, from sponsoring
          school sports in Soweto to partnering with environmental campaigns in
          the Eastern Cape. Our dedicated team works tirelessly to provide fast,
          reliable delivery services, ensuring your water arrives fresh, whether
          you’re in the vibrant streets of Gauteng or the scenic routes of the
          Garden Route. Join thousands of satisfied customers who trust us for
          their daily hydration needs, and experience the Water World Express
          difference.
        </p>
        <Storefront className="about-icon" size={48} weight="duotone" />
      </animated.section>

      {/* Store Finder Section */}
      <animated.section className="store-finder-section" style={sectionProps}>
        <h2 className="store-finder-heading">Find a Store Near You</h2>
        <div className="search-container">
          <MagnifyingGlass className="search-icon" size={24} />
          <input
            type="text"
            className="search-input"
            placeholder="Search by branch name or address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="branches-container">
          {filteredBranches.length > 0 ? (
            filteredBranches.map((branch) => (
              <div
                key={branch.name}
                className="branch-card"
                onClick={() => handleBranchClick(branch)}
              >
                <h3 className="branch-name">{branch.name}</h3>
                <p className="branch-info">
                  <MapPin size={20} className="branch-icon" /> {branch.address}
                </p>
                <p className="branch-info">
                  <a href={`tel:${branch.phone}`} className="branch-phone-link">
                    {branch.phone}
                  </a>
                </p>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps
                </a>
              </div>
            ))
          ) : (
            <p className="no-branches-found">
              No branches found. Try adjusting your search.
            </p>
          )}
        </div>
        {selectedBranch && (
          <div className="map-container">
            <h3 className="selected-branch-name">{selectedBranch.name}</h3>
            <iframe
              src={selectedBranch.mapEmbed}
              className="branch-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </animated.section>
    </div>
  );
};

export default AboutUs;
