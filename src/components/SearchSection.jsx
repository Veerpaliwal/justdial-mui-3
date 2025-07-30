import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";



export default function SearchSection() {
  // Rotating text
  const rotatingItems = [
    "4.7 Crore+ Businesses",
    "Restaurants Near You",
    "Best Packers & Movers",
    "Top Salons & Spas"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // 🔹 Corrected Slider images (public/img folder)
  const images = [
    "/img/slide1.jpeg",
    "img/spa-beauty-salon-facebook-cover-social-media-banner-template-design_976179-274.png",
    "img/YourStoryHindi29-june-ka-itihas-history-statistics-day-globe-theatre-apple-iphone-sell-1751174216168.png"
  ];

  return (
    <Box sx={{ mt: 12, px: 3 }}>
      {/* Rotating text */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Search across{" "}
        <span style={{ color: "#0076D7" }}>{rotatingItems[index]}</span>
      </Typography>

      {/* Location & Search Box */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 3
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Select Location"
          sx={{ bgcolor: "#fff", width: 220 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon color="primary" />
              </InputAdornment>
            )
          }}
        />

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search for Services"
          sx={{ bgcolor: "#fff", width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Slider (Justdial size) */}
      <Box
        sx={{
          width: "600px", // Justdial slider width
          height: "250px", // Justdial slider height
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>

      {/* Download App Button */}
      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        sx={{
          position: "fixed",
          top: "80px",
          right: "20px",
          zIndex: 2000,
          bgcolor: "#fff",
          borderColor: "#000",
          color: "#000",
          borderRadius: "20px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.2)"
        }}
      >
        Download App
      </Button>
    </Box>
  );
}


