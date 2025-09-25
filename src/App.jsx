import React, { useState, useEffect } from "react";
import './App.css'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import Footer from "./components/Footer"
import BusinessListing from "./pages/BusinessListing"
import BusinessDetails from "./pages/BusinessDetails"
import { Routes, Route } from "react-router-dom"
import Download from './pages/Download'

function App() {

  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Check scroll position
  const checkScrollTop = () => {
    if (window.scrollY > 100) {  // jab user 100px se zyada scroll kare
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<SearchSection />} />
        <Route path="/businessListing" element={<BusinessListing />} />
        <Route path="/businessDetails" element={<BusinessDetails />} />    
        <Route path="/download" element={<Download />} />
      </Routes>

      <Footer />

      {/* Right Side Buttons */}
      <ul
      className="nav flex-column position-fixed top-50 end- -50 translate-middle-y"
        style={{ zIndex: 1050, right: -50 }}
      >
        <li
          className="nav-item"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "center",
            marginBottom: "90px"
          }}
        >
          <a
            className="rounded-bottom nav-link active bg-danger text-white"
            href="#"
            style={{
              display: "inline-block",
              padding: "10px 25px",
              lineHeight: "20px"
            }}
          >
            Advertise
          </a>
        </li>

        <li
          className="nav-item"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "center"
          }}
        >
          <a
            className="rounded-bottom nav-link bg-primary text-white"
            href="#"
            style={{
              display: "inline-block",
              padding: "10px 25px",
              lineHeight: "20px"
            }}
          >
            Free Listing
          </a>
        </li>
      </ul>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "15px",
            right: "10px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#131314ff",
            color: "#fff",
            fontSize: "26px",      
            fontWeight: "bold",    
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2000,
            boxShadow: "0 4px 12px rgba(255,255,255,0.3)", // thoda glow
            transition: "transform 0.3s"
          }}
        >
           ↑
        </button>
      )}
    </>
  )
}

export default App
