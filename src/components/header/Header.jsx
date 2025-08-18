import React, { useState, useEffect } from "react";
import DevDocSig from "../../sig/dev-doc-logo.svg";
import {
  List,
  X,
  House,
  Package,
  Info,
  Phone,
} from "@phosphor-icons/react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const NavItems = [
    {
      navIdKey: 1,
      navLabel: "HOME",
      navIcon: <House size={24} weight="bold" />,
      path: "/",
    },
    {
      navIdKey: 2,
      navLabel: "INVENTORY",
      navIcon: <Package size={24} weight="bold" />,
      path: "/products",
    },
    {
      navIdKey: 3,
      navLabel: "ABOUT US",
      navIcon: <Info size={24} weight="bold" />,
      path: "/about",
    },
    {
      navIdKey: 4,
      navLabel: "CONTACT",
      navIcon: <Phone size={24} weight="bold" />,
      path: "/contact",
    },
    {
      navIdKey: 5,
      navLabel: "Developed by",
      navIcon: DevDocSig,
      isSignature: true,
      isHighlighted: true,
      path: "https://unclesmol.github.io/dev-doc",
    },
  ];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
      if (window.innerWidth >= 769 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const mobileNavSpring = useSpring({
    y: isDesktop ? "0%" : isMobileMenuOpen ? "0%" : "-100%",
    opacity: isDesktop ? 1 : isMobileMenuOpen ? 1 : 0,
    config: { tension: 400, friction: 30 },
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    if (!isDesktop && isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <header className="__Header">
      <Link to="/">
        <h1 className="__Logo">WATER WORLD</h1>
      </Link>

      <button
        className="__MobileMenuToggle"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={32} /> : <List size={32} />}
      </button>

      <animated.nav
        className="__Navigation"
        style={mobileNavSpring}
        aria-label="Main navigation"
      >
        <ul className="__NavList">
          {NavItems.map((item) => (
            <li
              key={item.navIdKey}
              className={
                item.isSignature
                  ? "__DevSignature"
                  : item.isHighlighted
                  ? "__Highlighted"
                  : ""
              }
            >
              {item.isSignature ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                >
                  <span>{item.navLabel}</span>
                  <img src={item.navIcon} alt="Developer Signature" />
                </a>
              ) : (
                <Link to={item.path} onClick={handleNavClick}>
                  {item.navIcon}
                  <span>{item.navLabel}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </animated.nav>
    </header>
  );
};

export default Header;
