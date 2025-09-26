import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";


export default function SearchSection() {
  // Rotating text
  const rotatingItems = [
    "4.7 Crore+ Businesses",
    "Restaurants Near You",
    "Best Packers & Movers",
    "Top Salons & Spas",
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
    slidesToScroll: 1,
  };

  // Slider images
  const images = [
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/mandapweb.png?t=1",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_hotels_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_interiordesigners_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_bills_2024.webp"
  ];
 

  // 4 Grid images
  const gridItems = [
    {
      image:
        "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=1920&q=75",
    },
    {
      image:
        "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=1920&q=75",
    },
    {
      image:
        "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=1920&q=75",
    },
    {
      image:
        "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=1920&q=75",
    },
  ];

  // Categories data
  const categories = [
    {
      name: "Restaurants",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=96&q=75",
      link: "/businessListing",
    },
    {
      name: "Hotels",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=96&q=75",
    },
    {
      name: "Beauty Spa",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=96&q=75",
    },
    {
      name: "Home Decor",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=96&q=75",
    },
    {
      name: "Education",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=96&q=75",
    },
    {
      name: "Rent & Hire",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=96&q=75",
    },
    {
      name: "Hospitals",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=96&q=75",
    },
    {
      name: "Contractors",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=96&q=75",
    },
    {
      name: "Pet Shops",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=96&q=75",
    },
    {
      name: "PG & Hostels",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=96&q=75",
    },
    {
      name: "Estate Agent",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=96&q=75",
    },
    {
      name: "Event Organizers",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=96&q=75",
    },
    {
      name: "Courier Services",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=96&q=75",
    },
    {
      name: "Loans",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/loans.svg?w=96&q=75",
    },
    {
      name: "Driving Schools",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=96&q=75",
    },
    {
      name: "Gym",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=96&q=75",
    },
    {
      name: "Packers & Movers",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=96&q=75",
    },
    {
      name: "Dentists",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=96&q=75",
    },
  ];

  // Beauty & Spa section
  const beautySpa = [
    {
      name: "Beauty Parlour",
      img: "img/photo-1616394584738-fc6e612e71b9.jpeg",
    },
    {
      name: "Spa & Massages",
      img: "img/delight-with-our-extensive-spa-treatments.png",
    },
    {
      name: "Salons",
      img: "img/istockphoto-1403130812-612x612.jpg",
    },
  ];

  // Repairs & Services section
  const repairsServices = [
    {
      name: "AC Services",
      img: "img/hvac-technician-performing-air-conditioner-600nw-2488702851.webp",
    },
    {
      name: "Car Services",
      img: "img/hand-mechanic-holding-car-service-600nw-2340377479(1).webp",
    },
    {
      name: "Bike Services",
      img: "img/images.jpeg",
    },
  ];

  // Bills & Recharge section
  const billsRecharge = [
    {
      name: "Mobile",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_mobile.svg?w=128&q=75",
    },
    {
      name: "Electricity",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_electricity.svg?w=128&q=75",
    },
    {
      name: "Gas",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_gas.svg?w=128&q=75",
    },
    {
      name: "Water",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_water.svg?w=128&q=75",
    },
  ];

  // Travel Booking section
  const travelBooking = [
    {
      name: "Flight",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_flight.svg?w=128&q=75",
    },
    {
      name: "Bus",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_bus.svg?w=128&q=75",
    },
    {
      name: "Train",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=128&q=75",
    },
    {
      name: "Car rentals",
      img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_carhire.svg?w=128&q=75",
    },
  ];

  // Trending Searches section
  const trendingSearches = [
    {
      name: "Coffe Shope",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10104727.jpg?w=256&q=75",
    },
    {
      name: "b ED colleges",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10968242.jpg?w=256&q=75",
    },
    {
      name: "Sweets Shops",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10465567.jpg?w=256&q=75",
    },
    {
      name: "Night Clubs",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10337610.jpg?w=256&q=75",
    },
    {
      name: "Restaurants",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10408938.jpg?w=256&q=75",
    },
  ];

  const movies = [
    {
      name: "Nobody 2",
      lang: "English • 2D",
      rating: "85%",
      img: "https://images.jdmagicbox.com/movies/centralized_161995312025_06_26_03_34_13_220.jpg?w=1920&q=75",
    },
    {
      name: "Saiyaara ",
      lang: "Hindi • 2D",
      rating: "74%",
      img: "https://images.jdmagicbox.com/movies/centralized_162039232025_06_20_02_34_02_220.jpg?w=1920&q=75",
    },
    {
      name: "F1",
      lang: "English • 2D",
      rating: "90%",
      img: "https://images.jdmagicbox.com/movies/centralized_161391492024_11_27_06_32_12_220.jpg?w=1920&q=75",
    },
    {
      name: "Maa Jaye",
      lang: "Punjabi • 2D",
      rating: "90%",
      img: "https://images.jdmagicbox.com/movies/centralized_162144372025_08_05_01_05_14_220.jpg?w=1920&q=75",
    },
  ];

  const popularSearches = [
    {
      name: "Pathology Labs",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10356131.jpg?fit=around%7C350:350&crop=350:350;*,*",
    },
    {
      name: "Dentists",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10156331.jpg?fit=around%7C350:350&crop=350:350;*,*",
    },
    {
      name: "Gynaecologist",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10551087.jpg?fit=around%7C350:350&crop=350:350;*,*",
    },
    {
      name: "Real State",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10192623.jpg?fit=around%7C350:350&crop=350:350;*,*",
    },
    {
      name: "Interior Designers",
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10272436.jpg?fit=around%7C350:350&crop=350:350;*,*",
    },
  ];

  const rainyData = [
    {
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10892680.jpg?w=256&q=75",
      title: "General Physician Doctors",
    },
    {
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10378056.jpg?w=256&q=75",
      title: "Plumbing Contractors",
    },
    {
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/11629233.jpg?w=256&q=75",
      title: "Fungal Infection Specialists",
    },
    {
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10546425.jpg?w=256&q=75",
      title: "Zip Lock Bag Dealers",
    },
    {
      img: "https://content.jdmagicbox.com/comp/def_content/ncat_id/10011618.jpg?w=256&q=75",
      title: "Air Purifier Dealers",
    },
  ];

  const reviewsData = [
    {
      company: "Samarth Enterprises",
      location: "Ghantali-Thane West – Mumbai",
      companyImg:
        "https://images.jdmagicbox.com/v2/comp/mumbai/02/022pf008502/catalogue/vijay-sales-santacruz-west-mumbai-dth-tv-broadcast-service-providers-tata-sky-35c25.jpg",
      userImg: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user98.png",
      user: "raju",
      review: "business committed to delivering quality products and services",
    },
    {
      company: "Sadguru Enterprises",
      location: "Ghantali-Thane West – Mumbai",
      companyImg:
        "https://images.jdmagicbox.com/v2/comp/mumbai/v6/022pxx22.xx22.140402110814.z7v6/catalogue/aasasas-ranas-bakra-malad-west-mumbai-mobile-phone-dealers-1o29cbo.jpg",
      userImg: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user72.png",
      user: "hardik",
      review: "Sadguru Enterprises is dedicated to providing reliable services",
    },
    {
      company: "All Season Dry Cloths",
      location: "Ghantali-Thane West – Mumbai",
      companyImg:
        "https://content.jdmagicbox.com/v2/comp/mumbai/q7/022pxx22.xx22.130916131124.m3q7/catalogue/kotwala-synthetics-kalbadevi-mumbai-cloth-wholesalers-4k5fqll-250.jpg?w=640&q=75",
      userImg: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user81.png",
      user: "hardik",
      review:
        "Dry system is excellent, easy operated, I am satisfied, Thank you.",
    },
  ];

  const additionalCards = [
    {
      img: "https://content.jdmagicbox.com/v2/comp/siwan/k4/9999p6154.6154.221006205829.d1k4/catalogue/keshaw-vastralya-siwan-galla-bazar-siwan-readymade-garment-retailers-pmunjewwhf-250.jpg?w=640&q=75",
      title:
        "The Banarasi Silk Saree Edit: Celeb-Approved Ways to Rock Banarasi Sarees.",
    },
    {
      img: "https://images.jdmagicbox.com/comp/def_content/amusement_parks/default-amusement-parks-0-250.jpg?w=3840&q=75",
      title: "Fresh Feet Forward: Top Sneaker Cleaning Services in Mumbai.",
    },
    {
      img: "https://content.jdmagicbox.com/v2/comp/mumbai/c8/022pxx22.xx22.180813132535.l7c8/catalogue/global-institute-of-sports-business-kamani-kurla-west-mumbai-sports-management-institutes-1ev4suekst-250.jpg?w=640&q=75",
      title: "Sports Management Courses in Mumbai: Meets Profession.",
    },
    {
      img: "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1682999785935_bsvjh_4060x2707.jpg?w=1080&q=75",
      title:
        "Best Boarding Schools in India: A Class Apart in Education and Excellence",
    },
  ];

  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate('/download');
  };

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
          sx={{ bgcolor: "#E8E8E8", width: 220 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search for Services"
          sx={{ bgcolor: "#E8E8E8", width: 450, borderRadius: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
                
              </InputAdornment>
            ),
             endAdornment: (
              <InputAdornment position="end">
                <MicIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Slider + Grid */}
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
        {/* Slider */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "600px",
            height: "250px",
            borderRadius: "10px",
            overflow: "hidden",
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
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </Box>

        {/* 4 Image Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
            },
            gap: 1,
            height: "250px",
            flex: 1,
            minWidth: "200px",
          }}
        >
          {gridItems.map((item, i) => (
            <Card
              key={i}
              sx={{ borderRadius: "10px", overflow: "hidden", height: "100%", width: "100%" }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={`Grid item ${i + 1}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          ))}
        </Box>
      </Box>

      {/* Categories */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        {categories.map((cat, i) => (
          <Box key={i} textAlign="center">
            {cat.name === "Restaurants" ? (
              <RouterLink
                to={cat.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{ width: "60px", height: "60px" }}
                />
                <Typography variant="body2">{cat.name}</Typography>
              </RouterLink>
            ) : (
              <>
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{ width: "60px", height: "60px" }}
                />
                <Typography variant="body2">{cat.name}</Typography>
              </>
            )}
          </Box>
        ))}
      </Box>

      {/* Beauty & Spa */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Beauty & Spa
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mb: 4 }}>
        {beautySpa.map((item, i) => (
          <Card key={i} sx={{ width: 270, textAlign: "center" }}>
            <CardMedia
              component="img"
              height="150"
              image={item.img}
              alt={item.name}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {item.name}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Repairs & Services */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Repairs & Services
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mb: 4 }}>
        {repairsServices.map((item, i) => (
          <Card key={i} sx={{ width: 270, textAlign: "center" }}>
            <CardMedia
              component="img"
              height="150"
              image={item.img}
              alt={item.name}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {item.name}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Bills & Recharge Box */}
      <Box sx={{ border: "1px solid #ddd", borderRadius: "10px", p: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Bills & Recharge
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
          Pay your bills & recharge instantly with Justdial
        </Typography>
        <Typography variant="body2" sx={{ color: "blue", mb: 2 }}>
          Explore More
        </Typography>
        <Box sx={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {billsRecharge.map((item, i) => (
            <Card key={i} sx={{ width: 180, textAlign: "center" }}>
              <CardMedia
                component="img"
                height="120"
                image={item.img}
                alt={item.name}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Travel Booking Box */}
      <Box sx={{ border: "1px solid #ddd", borderRadius: "10px", p: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Travel Booking
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
          Instant ticket bookings for your best travel experience
        </Typography>
        <Typography variant="body2" sx={{ color: "blue", mb: 2 }}>
          Explore More
        </Typography>
        <Box sx={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {travelBooking.map((item, i) => (
            <Card key={i} sx={{ width: 180, textAlign: "center" }}>
              <CardMedia
                component="img"
                height="120"
                image={item.img}
                alt={item.name}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Trending Searches Box */}
      <Box sx={{ border: "1px solid #ddd", borderRadius: "10px", p: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Trending Searches Near You <span style={{ color: "red", fontSize: "14px" }}>NEW</span>
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
          Latest local trends around you
        </Typography>
        <Box sx={{ display: "flex", overflowX: "auto", gap: 5, pb: 2 }}>
          {trendingSearches.map((item, i) => (
            <Card key={i} sx={{ minWidth: 200, textAlign: "center" }}>
              <CardMedia
                component="img"
                height="120"
                image={item.img}
                alt={item.name}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      <div className="container my-5">
        <h2>Latest Movies & Review</h2>
        <div className="row g-3">
          {movies.map((movie, i) => (
            <div className="col-3" key={i}>
              <div className="card h-100 w-100">
                <img
                  src={movie.img}
                  className="card-img-top img-fluid"
                  alt={movie.name}
                />
                <div className="card-body">
                  <h6>{movie.name}</h6>
                  <p className="text-muted">{movie.lang}</p>
                  <span className="badge bg-danger">{movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Box className="container my-5">
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Popular Searches
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {popularSearches.map((item, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                boxShadow: 3,
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={item.img}
                alt={item.name}
              />
              <CardContent
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  textAlign: "center",
                  py: 2,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 1,
                    bgcolor: "#fff",
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "grey.200" },
                  }}
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box className="container" my={5}>
        <Box className="category-box">
          <Typography variant="h5" fontWeight="bold">
            Rainy Day Essentials{" "}
            <Chip label="SEASONAL" color="error" size="small" />
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Discover wide range of rainy collection
          </Typography>
          <Box display="flex" gap={2} overflow="auto">
            {rainyData.map((item, index) => (
              <Card key={index} sx={{ minWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Link href="#" color="primary" underline="hover">
                    Explore &gt;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="container" my={5}>
        <Typography variant="h4" mb={3}>
          Recent Activity
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={3}
        >
          {reviewsData.map((item, i) => (
            <Card key={i} sx={{ boxShadow: 3 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={2}
                py={1}
                borderBottom="1px solid #eee"
              >
                <Box>
                  <Typography fontWeight="bold">{item.company}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                </Box>
                <Chip
                  label="WhatsApp"
                  size="small"
                  avatar={
                    <img
                      src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/squarewhatsapp_icon.svg"
                      alt="whatsapp"
                      width={18}
                    />
                  }
                />
              </Box>
              <CardMedia
                component="img"
                height="160"
                image={item.companyImg}
                alt={item.company}
              />
              <CardContent
                sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
              >
                <img
                  src={item.userImg}
                  alt={item.user}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography fontWeight="600">{item.user}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Wrote a review
                  </Typography>
                  <Typography variant="body2" color="warning.main">
                    ★★★★★
                  </Typography>
                  <Typography variant="body2">{item.review}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box className="container" my={5} display="flex" flexWrap="wrap" gap={3}>
        {additionalCards.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: 260,
              height: 350,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={card.img}
              alt={card.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" fontWeight="600">
                {card.title}
              </Typography>
            </CardContent>
            <Box px={2} pb={2}>
              <Button variant="contained" size="small">
                Explore &gt;
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Download App Button */}
      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={handleDownloadClick}
        sx={{
          position: "fixed",
          top: "80px",
          right: "20px",
          zIndex: 2000,
          bgcolor: "#fff",
          borderColor: "#000",
          color: "#000",
          borderRadius: "20px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        Download App
      </Button>
    </Box>
  );
}