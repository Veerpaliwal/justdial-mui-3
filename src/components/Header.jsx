import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TranslateIcon from "@mui/icons-material/Translate";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  const [langAnchor, setLangAnchor] = React.useState(null);

  const handleLangOpen = (event) => setLangAnchor(event.currentTarget);
  const handleLangClose = () => setLangAnchor(null);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: 3 }}>

        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0078d4" }}>
          Just<span style={{ color: "orange" }}>dial</span>
        </Typography>

        {/* Location Input */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Select Location"
          sx={{ width: 180, bgcolor: "#fff", borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />

        {/* Search Input */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search for Packers "
          sx={{ width: 220, bgcolor: "#fff", borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />

        {/* Spacer */}
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
          <MenuItem onClick={handleLangClose}>Hindi - H</MenuItem>
          <MenuItem onClick={handleLangClose}>English - E</MenuItem>
          <MenuItem onClick={handleLangClose}>ગુજરાતી - GU</MenuItem>
          <MenuItem onClick={handleLangClose}>ಕರ್ನಾಟಕ - KN</MenuItem>
          <MenuItem onClick={handleLangClose}>தமிழ் - TM</MenuItem>
        </Menu>

        {/* Right Links */}
        <Button sx={{ textTransform: "none", color: "#000" }}>Investor Relations</Button>
        <Button startIcon={<BarChartIcon />} sx={{ textTransform: "none", color: "#000" }}>Free Listing</Button>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Button variant="contained" startIcon={<AccountCircleIcon />}>
          Login / Sign-up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
