import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#157AD7",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - QR Section */}
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              {/* Heading */}
              <Typography variant="h5" gutterBottom>
                Scan QR code and get the Jd app instantly
              </Typography>

              {/* QR Image */}
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_banner_qr_2.png" // 👈 Replace with your QR image
                alt="QR Code"
                sx={{ width: 180, height: 180, margin: "20px auto" }}
              />

              {/* Input + Button */}
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 1,
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: 350,
                  mx: "auto",
                }}
              >
                <TextField
                  placeholder="Enter Mobile Number"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{ flexGrow: 1, mr: 1 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#157AD7",
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                >
                  Send Now
                </Button>
              </Box>

              {/* Store Buttons */}
              <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                <Box
                  component="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  sx={{ height: 50 }}
                />
                <Box
                  component="img"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  sx={{ height: 50 }}
                />
              </Box>
            </Grid>

            {/* Right Side - Phone Image */}
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_banner_image.png?v=1.0" 
                alt="Phone"
                sx={{ maxWidth: "350px", height: "600px" }}
              />
            </Grid>
          </Grid>
        </Box>
        <h2 className="mt-5 text-center">Local Search App with a difference</h2>
        
       <Grid container spacing={3} justifyContent="center">
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345, textAlign: "center", p: 2 }}>
          <CardActionArea>
            {/* Circle Image */}
            <Box
              component="img"
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_rating.svg" // 👈 apna image yahan daalo
              alt="Circle Image"
              sx={{
                width: 150, // 👈 yahan se size control kar sakte ho
                height: 150,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mb: 2,
              }}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345, textAlign: "center", p: 2 }}>
          <CardActionArea>
            <Box
              component="img"
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_locat.svg"
              alt="Circle Image"
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, textAlign: "center", p: 2 }}>

          <CardActionArea>
            <Box
              component="img"
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_choice.svg"
              alt="Circle Image"
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>

      </Container>
    </React.Fragment>
  );
}
