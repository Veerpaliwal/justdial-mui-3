import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function SimpleContainer() {
  // Handler for "Send Now" button (example)
  const handleSendNow = () => {
    console.log("Send Now clicked!");
    // Add logic to send download link or process mobile number
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "#157AD7",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - QR Section */}
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Scan QR code and get the JD app instantly
              </Typography>
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_banner_qr_2.png"
                alt="QR Code for JD App Download"
                sx={{ width: 180, height: 180, margin: "20px auto" }}
              />
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
                  aria-label="Mobile Number Input"
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#157AD7",
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                  onClick={handleSendNow}
                  aria-label="Send Download Link"
                >
                  Send Now
                </Button>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Download on Google Play"
                  sx={{ height: 50 }}
                />
                <Box
                  component="img"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  sx={{ height: 50 }}
                />
              </Box>
            </Grid>
            {/* Right Side - Phone Image */}
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_banner_image.png?v=1.0"
                alt="JD App on Phone"
                sx={{ maxWidth: { xs: "80%", md: "350px" }, height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Features Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 5, mb: 3, fontWeight: "bold" }}
        >
          Local Search App with a Difference
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, textAlign: "center", p: 2 }}>
              <CardActionArea>
                <Box
                  component="img"
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_rating.svg"
                  alt="Feature 1 Icon"
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
                    Local Listings
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Allows You to Rate Businesses, Tag Your Friends and see each others Ratings
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
                  alt="Feature 2 Icon"
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
                    Location-Based Search
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Get Results Near You
                     Location-Based Search
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
                  alt="Feature 3 Icon"
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
                    Personalized Choices
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                   Get popular choices of Restaurants, Movies, Doctors & much more
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <p className="mt-5">Looking for businesses, products, or services in your vicinity has never been easier! The Justdial mobile app is the number 1 local search engine that offers a simple, interactive, and intuitive way to search for whatever you need on your smartphone with lightning-fast speed.</p>
        <p className="mt-5">We’ve got you covered! Want to know which movies are playing nearby? Or perhaps you're on the hunt for the swankiest restaurant or lounge in town. Maybe you’re wondering where the latest art exhibition is, or you need to get to an ATM or medical facility quickly or find hotels in an unfamiliar area. Whatever your needs, whatever you fancy, the Justdial app offers a comprehensive list of popular search categories to help you find exactly what you're looking for.</p>
        <p className="mt-5">Now, sort search results based on personal preferences. With Justdial Hotkeys, you can access results with a tap - no more waiting around for pages to load! And our ‘Near Me’ feature helps you find almost anything nearby. So, no more sifting through endless, irrelevant search results. </p>
        <p className="mt-5">You can easily connect with local businesses and service providers directly by just tapping on the phone icon. With its interactive and intuitive interface, the Justdial app is the perfect solution for any local search. Download the app today and explore things like never before!</p>
        <h2 className="mt-5 text-center " >Jd Search Plus Services On Mobile</h2>
      </Container>
    </React.Fragment>
  );
}