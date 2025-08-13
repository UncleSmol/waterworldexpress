// Updated App.js
import "./styling/variables.css";
import "./styling/GlobalResets.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Products from "./components/products/Products";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/aboutUs";
import Cart from "./shared/Cart";
import { CartProvider } from "./context/CartContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed to HashRouter

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}
