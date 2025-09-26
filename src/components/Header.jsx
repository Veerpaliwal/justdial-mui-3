import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TranslateIcon from "@mui/icons-material/Translate";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import axios from "axios";

export default function Header() {
  const [langAnchor, setLangAnchor] = useState(null);
  const [location, setLocation] = useState("");

  // 🔹 category states
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // 🔹 selected category + businesses
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [businesses, setBusinesses] = useState([]);

  // 🔹 login modal states
  const [openLogin, setOpenLogin] = useState(false);
  const [mobile, setMobile] = useState("");

  // ref for dropdown close outside click
  const dropdownRef = useRef(null);

  // Language menu handlers
  const handleLangOpen = (event) => setLangAnchor(event.currentTarget);
  const handleLangClose = () => setLangAnchor(null);

  // Example list of locations
  const locations = [
    "Delhi", "Mumbai", "Jaipur", "Bangalore", "Chennai", "Hyderabad",
    "Kolkata", "Pune", "Lucknow", "Indore", "Surat", "Ahmedabad",
    "Bhopal", "Nagpur", "Patna"
  ];

  // Detect location function
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log("Latitude:", latitude, "Longitude:", longitude);
          setLocation("Neemuch (MP)");
        },
        () => alert("Location access denied")
      );
    } else {
      alert("Geolocation not supported in this browser");
    }
  };

  // Handle location change
  const handleLocationChange = (event) => {
    const value = event.target.value;
    if (value === "detect") {
      detectLocation();
    } else {
      setLocation(value);
    }
  };

  // 🔹 Fetch categories from API
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/business-categories")
      .then((res) => {
        const cats = res.data.data.map((cat) => cat.name);
        console.log("Categories from API:", cats);
        if (cats.length === 0) {
          setCategories(["Restaurants", "Hotels", "Hospitals", "Schools"]);
        } else {
          setCategories(cats);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setCategories(["Restaurants", "Hotels", "Hospitals", "Schools"]);
      });
  }, []);

  // 🔹 Fetch businesses when category selected
  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`http://localhost:1337/api/businesses?filters[category][$eq]=${selectedCategory}`)
        .then((res) => setBusinesses(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [selectedCategory]);

  // 🔹 Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFiltered([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔹 handle login
  const handleLogin = () => {
    if (!mobile) {
      alert("Please enter your mobile number");
      return;
    }
    alert(`OTP sent to ${mobile}`);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Logo */}
          <img
            src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
            alt="Justdial Logo"
            style={{ height: 30, width: "auto" }}
          />

          {/* Location Select */}
          <FormControl size="small" sx={{ width: 200, bgcolor: "#E8E8E8", borderRadius: 1 }}>
            <Select
              value={location}
              onChange={handleLocationChange}
              displayEmpty
              startAdornment={<InputAdornment position="start"><LocationOnIcon color="primary" /></InputAdornment>}
              renderValue={(selected) => selected || "Select Location"}
              MenuProps={{
                PaperProps: { style: { maxHeight: 200, overflowY: "auto" } },
              }}
            >
              <MenuItem value="detect" sx={{ color: "blue", fontWeight: "bold" }}>
                <MyLocationIcon sx={{ mr: 1, color: "blue" }} />
                Detect Location
              </MenuItem>
              {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* 🔹 Search Input + Suggestions */}
          <Box sx={{ position: "relative" }} ref={dropdownRef}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search categories..."
              value={search}
              onClick={() => setFiltered(categories)}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value.trim() === "") {
                  setFiltered(categories);
                } else {
                  setFiltered(categories.filter((cat) =>
                    cat.toLowerCase().includes(e.target.value.toLowerCase())
                  ));
                }
              }}
              sx={{ width: 220, bgcolor: "#E8E8E8", borderRadius: 1 }}
              InputProps={{
                startAdornment: (<InputAdornment position="start"><SearchIcon color="primary" /></InputAdornment>),
                 
                            
              }}
            />

            {filtered.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "40px",
                  left: 0,
                  width: "100%",
                  bgcolor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  zIndex: 9999,
                  maxHeight: 250,
                  overflowY: "auto",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                {filtered.map((cat, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      setSearch(cat);
                      setSelectedCategory(cat);
                      setFiltered([]);
                    }}
                  >
                    {cat}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Language Dropdown */}
          <Button
            onClick={handleLangOpen}
            endIcon={<ArrowDropDownIcon />}
            startIcon={<TranslateIcon />}
            sx={{ textTransform: "none", color: "primary.main" }}
          >
            En
          </Button>
          <Menu anchorEl={langAnchor} open={Boolean(langAnchor)} onClose={handleLangClose}>
            <MenuItem disabled>No languages available</MenuItem>
          </Menu>

          <Button sx={{ textTransform: "none", color: "#000" }}>Investor Relations</Button>
          <Button startIcon={<BarChartIcon />} sx={{ textTransform: "none", color: "#000" }}>Free Listing</Button>
          <IconButton><NotificationsIcon /></IconButton>

          <Button
            variant="contained"
            startIcon={<AccountCircleIcon />}
            onClick={() => setOpenLogin(true)}
          >
            Login / Sign-up
          </Button>
        </Toolbar>
      </AppBar>

      {/* 🔹 Business Scroll Section */}
      {selectedCategory && (
        <Box sx={{ mt: 12, px: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {selectedCategory} Businesses
          </Typography>

          <Box sx={{ display: "flex", gap: 2, overflowX: "auto", p: 1, border: "1px solid #ddd", borderRadius: 2 }}>
            {businesses.length > 0 ? (
              businesses.map((biz) => (
                <Card key={biz.id} sx={{ minWidth: 200, flex: "0 0 auto" }}>
                  <CardContent>
                    <Typography variant="h6">{biz.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{biz.description}</Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography>No businesses found.</Typography>
            )}
          </Box>
        </Box>
      )}

      {/* 🔹 Login Modal */}
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "center" }}>
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" alt="logo" height="35"/>
          <Typography variant="h6">Welcome</Typography>
          <Typography variant="body2" color="text.secondary">Login for a seamless experience</Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <Typography variant="body2">
                I Agree to{" "}
                <a href="#" style={{ color: "blue" }}>Terms and Conditions</a> &{" "}
                <a href="#" style={{ color: "blue" }}>Privacy Policy</a>
              </Typography>
            }
          />
          <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>LOGIN WITH OTP</Button>
          <Typography align="center" sx={{ my: 1, color: "gray" }}>Or Login Using</Typography>
          <Button fullWidth variant="outlined" startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" width={20}/>}>
            Continue with Google
          </Button>
          <Typography align="center" sx={{ mt: 2 }}>
            <a href="#" onClick={() => setOpenLogin(false)}>Skip for now</a>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
} 

