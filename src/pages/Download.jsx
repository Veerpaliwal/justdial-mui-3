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
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* B2B Block */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_jdmart.svg" // Replace with actual B2B icon
                alt="B2B Icon"
                sx={{ width: 50, height: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                B2B
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Connect with Buyers & Sellers: Liaise with top-notch vendors and
                scale your business to great heights. The JD Mart is the ultimate
                destination for businesses to liaise with other businesses and
                wholesalers offering a multitude of products across diverse
                categories. Discover the power of access to choice.
              </Typography>
            </Box>
          </Grid>

          {/* Bills & Recharge Block */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_bills.svg" // Replace with actual Bills & Recharge icon
                alt="Bills & Recharge Icon"
                sx={{ width: 50, height: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Bills & Recharge
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Pay your Bills: Hate queuing up to pay your bills or waiting
                endlessly to recharge your devices? With JD Recharge, you can
                effortlessly manage all your payments including gas,
                electricity, landline connections, mobile phone, data card, DTH,
                and more. Keep track of your bill cycle payments conveniently,
                avoid late payment penalties, and enjoy peace of mind with
                stress-free bill management.
              </Typography>
            </Box>
          </Grid>

          {/* Travel Booking Block */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_travel.svg" // Replace with actual Travel Booking icon
                alt="Travel Booking Icon"
                sx={{ width: 50, height: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Travel Booking
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Travel Booking: You may be bitten by the wanderlust bug. Or,
                perhaps, you're travelling out of compulsion. Either way, book a
                hotel room, book tickets and make reservations for travel by
                train, bus, or flight without chasing travel agents. With a live
                inventory, instant booking, and extensive travel partners,
                compare connectivity and rates swiftly and hassle-free.
              </Typography>
            </Box>
          </Grid>

          {/* JDOMNI Block */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_omni.svg" // Replace with actual JDOMNI icon
                alt="JDOMNI Icon"
                sx={{ width: 50, height: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                JDOMNI
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Create a Website: The world's gone digital, and so should you.
                Revolutionise your enterprise with our cloud-based software that
                offers seamless end-to-end solutions from supply chain
                management to customer acquisition and engagement. With an easy
                user interface, customisation options, and the potential to
                reach a greater multitude in a location-agnostic manner, JD Omni
                allows you to host and maintain your brand online.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
        </React.Fragment>
        <h2>Popular Categories</h2>
        <Typography> Body Massage Centres | Mumbai, Cinema Halls | Mumbai, Schools | Mumbai, Beauty Spas | Mumbai, Dermatologists | Mumbai, Hospitals | Mumbai, Malls | Mumbai, Gyms | Mumbai, Beauty Parlours | Mumbai, Estate Agents | Mumbai, Banquet Halls | Mumbai, ENT Doctors | Mumbai, Book Shops | Mumbai, Bike On Rent | Mumbai, Sexologist Doctors | Mumbai, Neurologists | Mumbai, Gynaecologist & Obstetrician Doctors | Mumbai, Tiffin Services | Mumbai, Travel Agents | Mumbai, Paying Guest Accommodations | Mumbai, General Physician Doctors | Mumbai, Dentists | Mumbai, Orthopaedic Doctors | Mumbai, Chemists | Mumbai, Motor Training Schools | Mumbai, Gastroenterologists | Mumbai, Car Rental | Mumbai, Salons | Mumbai, Courier Services | Mumbai, Dance Classes | Mumbai, Pathology Labs | Mumbai, Taxi Services | Mumbai, Cake Shops | Mumbai, AC Repair & Services | Mumbai, Mobile Phone Dealers | Mumbai, Pet Shops | Mumbai, Dmart | Mumbai, Packers And Movers | Mumbai.</Typography>
      </Container>
    </React.Fragment>
  );
}