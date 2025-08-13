// Updated App.js
import "./styling/variables.css";
import "./styling/GlobalResets.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Products from "./components/products/Products";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/aboutUs";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed to HashRouter

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
