import './App.css'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import Footer from "./components/Footer"
import BusinessListing from "./pages/BusinessListing"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      {/* Header har page pe common */}
      <Header />

      <Routes>
        <Route path="/" element={<SearchSection />} />
        <Route path="/businessListing" element={<BusinessListing />} />
      </Routes>

      {/* Footer har page pe common */}
      <Footer />

      {/* Fixed right side navigation */}
      <ul
        className="nav flex-column position-fixed top-50 end-0 translate-middle-y"
        style={{ zIndex: 1050 }}
      >
        {/* Advertise Button */}
        <li
          className="nav-item"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center", // 👈 center se rotate hoga
            marginBottom: "60px"       // 👈 neeche gap
          }}
        >
          <a
            className="rounded-bottom nav-link active bg-danger text-white"
            href="#"
            style={{
              display: "inline-block",
              padding: "10px 25px", // 👈 box size
              lineHeight: "20px"    // 👈 text ko vertical adjust karega
            }}
          >
            Advertise
          </a>
        </li>

        {/* Free Listing Button */}
        <li
          className="nav-item"
          style={{
            transform: "rotate(-90deg)",
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
    </>
  )
}

export default App
