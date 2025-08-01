import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
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

  // ✅ Slider images
  const images = [
    "public/img/slide1.jpeg",
    "public/img/spa-beauty-salon-facebook-cover-social-media-banner-template-design_976179-274.png",
    "public/img/YourStoryHindi29-june-ka-itihas-history-statistics-day-globe-theatre-apple-iphone-sell-1751174216168.png"
  ];

  // ✅ 4 Grid images
  const gridItems = [
    { image: "public/img/image(38).png" },
    { image: "public/img/full-body-young-employee-laborer-260nw-2440020209.png" },
    { image: "public/img/360_F_285834130_nM5F6xl8lh8Mhb00ksNXBS6iBH9bMExz.png" },
    { image: "public/img/imag(38).png" }
  ];

  // ✅ Categories data
  const categories = [
    { name: "Restaurants", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=96&q=75", link: "bussiness-listing.html" },
    { name: "Hotels", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=96&q=75" },
    { name: "Beauty Spa", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=96&q=75" },
    { name: "Home Decor", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=96&q=75" },
    { name: "Education", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=96&q=75" },
    { name: "Rent & Hire", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=96&q=75" },
    { name: "Hospitals", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=96&q=75" },
    { name: "Contractors", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=96&q=75" },
    { name: "Pet Shops", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=96&q=75" },
    { name: "PG & Hostels", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=96&q=75" },
    { name: "Estate Agent", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=96&q=75" },
    { name: "Event Organizers", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=96&q=75" },
    { name: "Courier Services", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=96&q=75" },
    { name: "Loans", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/loans.svg?w=96&q=75" },
    { name: "Driving Schools", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=96&q=75" },
    { name: "Gym", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=96&q=75" },
    { name: "Packers & Movers", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=96&q=75" },
    { name: "Dentists", img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=96&q=75" }
  ];

  // ✅ Beauty & Spa section
  const beautySpa = [
    { name: "Beauty Parlour", img: "img/photo-1616394584738-fc6e612e71b9.jpeg" },
    { name: "Spa & Massages", img: "img/delight-with-our-extensive-spa-treatments.png" },
    { name: "Salons", img: "img/istockphoto-1403130812-612x612.jpg" }
  ];

  // ✅ Repairs & Services section
  const repairsServices = [
    { name: "AC Services", img: "img/hvac-technician-performing-air-conditioner-600nw-2488702851.webp" },
    { name: "Car Services", img: "img/hand-mechanic-holding-car-service-600nw-2340377479(1).webp" },
    { name: "Bike Services", img: "img/images.jpeg" }
  ];

  // ✅ Bills & Recharge section
  const billsRecharge = [
    { name: "Mobile", img: "./img/photo-1511707171634-5f897ff02aa9.jpeg" },
    { name: "Electricity", img: "./img/pexels-pixabay-207489.jpg" },
    { name: "Gas", img: "./img/360_F_406147347_aJkSB0JxwcLMPLIZErVFi5Q5ZtUSR14r.jpg" },
    { name: "Water", img: "./img/pexels-photo-416528.jpeg" }
  ];

  // ✅ Travel Booking section
  const travelBooking = [
    { name: "Flight", img: "img/airplane-in-sky-background-illustration-ai-generative-free-photo.jpg" },
    { name: "Bus", img: "./img/banner6.jpg" },
    { name: "Train", img: "./img/images(1).jpeg" },
    { name: "Car rentals", img: "./img/images(2).jpeg" }
  ];

  // ✅ Trending Searches section
  const trendingSearches = [
    { name: "Photo studio", img: "img/image(18).png" },
    { name: "Car Rental", img: "img/images(2).jpeg" },
    { name: "Hospitals", img: "img/hospital-building-outside-composition-vector.png" },
    { name: "Lawyer", img: "img/law-and-authority-lawyer-concept-judgment-gavel-hammer-in-court.png" },
    { name: "Restaurants", img: "img/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.png" }
  ];

  return (
    <Box sx={{ mt: 12, px: 3 }}>
      {/* Rotating text */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Search across{" "}
        <span style={{ color: "#0076D7" }}>{rotatingItems[index]}</span>
      </Typography>

      {/* Location & Search Box */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
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

      {/* Slider + Grid */}
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
        {/* Slider */}
        <Box sx={{ flex: 1, minWidth: "300px", maxWidth: "600px", height: "250px", borderRadius: "10px", overflow: "hidden" }}>
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`Slide ${i + 1}`} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} />
              </div>
            ))}
          </Slider>
        </Box>

        {/* 4 Image Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }, gap: 1, height: "250px", flex: 1, minWidth: "200px" }}>
          {gridItems.map((item, i) => (
            <Card key={i} sx={{ borderRadius: "10px", overflow: "hidden", height: "100%", width: "100%" }}>
              <CardMedia component="img" image={item.image} alt={`Grid item ${i + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Card>
          ))}
        </Box>
      </Box>

      {/* Categories */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }, gap: 3, mb: 4 }}>
        {categories.map((cat, i) => (
          <Box key={i} textAlign="center">
            <img src={cat.img} alt={cat.name} style={{ width: "60px", height: "60px" }} />
            <Typography variant="body2">{cat.name}</Typography>
          </Box>
        ))}
      </Box>

      {/* Beauty & Spa */}
      <Typography variant="h6" sx={{ mb: 2 }}>Beauty & Spa</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mb: 4 }}>
        {beautySpa.map((item, i) => (
          <Card key={i} sx={{ width: 270, textAlign: "center" }}>
            <CardMedia component="img" height="150" image={item.img} alt={item.name} />
            <Typography variant="body2" sx={{ mt: 1 }}>{item.name}</Typography>
          </Card>
        ))}
      </Box>

      {/* Repairs & Services */}
      <Typography variant="h6" sx={{ mb: 2 }}>Repairs & Services</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mb: 4 }}>
        {repairsServices.map((item, i) => (
          <Card key={i} sx={{ width: 270, textAlign: "center" }}>
            <CardMedia component="img" height="150" image={item.img} alt={item.name} />
            <Typography variant="body2" sx={{ mt: 1 }}>{item.name}</Typography>
          </Card>
        ))}
      </Box>

      {/* Bills & Recharge Box */}
      <Box sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Bills & Recharge</Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>Pay your bills & recharge instantly with Justdial</Typography>
        <Typography variant="body2" sx={{ color: "blue", mb: 2 }}>Explore More</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {billsRecharge.map((item, i) => (
            <Card key={i} sx={{ width: 180, textAlign: "center" }}>
              <CardMedia component="img" height="120" image={item.img} alt={item.name} />
              <Typography variant="body2" sx={{ mt: 1 }}>{item.name}</Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Travel Booking Box */}
      <Box sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Travel Booking</Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>Instant ticket bookings for your best travel experience</Typography>
        <Typography variant="body2" sx={{ color: "blue", mb: 2 }}>Explore More</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {travelBooking.map((item, i) => (
            <Card key={i} sx={{ width: 180, textAlign: "center" }}>
              <CardMedia component="img" height="120" image={item.img} alt={item.name} />
              <Typography variant="body2" sx={{ mt: 1 }}>{item.name}</Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Trending Searches Box */}
      <Box sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Trending Searches Near You <span style={{ color: "red", fontSize: "14px" }}>NEW</span>
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>Latest local trends around you</Typography>
        <Box sx={{ display: "flex", overflowX: "auto", gap: 2, pb: 2 }}>
          {trendingSearches.map((item, i) => (
            <Card key={i} sx={{ minWidth: 200, textAlign: "center" }}>
              <CardMedia component="img" height="120" image={item.img} alt={item.name} />
              <Typography variant="body2" sx={{ mt: 1 }}>{item.name}</Typography>
            </Card>
          ))}
        </Box>
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
