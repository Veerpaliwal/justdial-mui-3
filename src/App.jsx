import './App.css'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import Footer from "./components/Footer"
import BusinessListing from "./pages/BusinessListing"
import BusinessDetails from "./pages/BusinessDetails"
import { Routes, Route } from "react-router-dom"
import Download from './pages/Download'


function App() {
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
        className="nav flex-column position-fixed top-50 end-0 translate-middle-y"
        style={{ zIndex: 1050 }}
      >
        <li
          className="nav-item"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            marginBottom: "60px"
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