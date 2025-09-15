import { Container, Grid, Box, Typography, List, ListItem } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" bgcolor="#f8f9fa" py={5}>
      <Container>
        {/* Follow us section */}
        <Box display="flex" alignItems="center" mb={3}>
          <Typography variant="body1">Follow us on</Typography>
          <Box component="img" src="https://www.facebook.com/images/icons/FBLogo_Blueprint.png" alt="Facebook" width={25} height={25} ml={2} />
          <Box component="img" src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_insta_active.svg" alt="Instagram" width={25} height={25} ml={2} />
          <Box component="img" src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_youtube_active.svg" alt="YouTube" width={25} height={25} ml={2} />
          <Box component="img" src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_linkedIn_active.svg" alt="linkedin" width={25} height={25} ml={2} />
        </Box>

        {/* Intro Section */}
        <Typography variant="h6" mt={4}>
          One-Stop for All Local Businesses, Services, & Stores Nearby Across India
        </Typography>
        <Typography variant="body2" mt={2}>
            Welcome to Justdial, your 'one stop shop' where you are assisted
              with day-to-day and exclusive planning and purchasing activities.
              We take pride in our iconic customer support number, 8888888888
              and the fact that we own a strong hold on local business
              information pan India...
              </Typography>
        
         <h5 className="mt-5">
        Some of our services that will prove useful to you on a day-to-day basis are :
      </h5>

      <div className="row text-left mt-3">
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_jobs.svg?w=96&q=75" alt="Jobs" width="25" height="25" className="ms-2" />
          <strong>Jobs</strong>
          <p>
            Providing pertinent jobs to job seekers and relevant profiles to employers,
            this service will help you reach out to employers and vice-versa across
            industry verticals, experience levels and geographies.
          </p>
        </div>
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_movies.svg?w=96&q=75" alt="Movies" width="25" height="25" className="ms-2" />
          <strong>Movies</strong>
          <p>
            This gives you access to book tickets and keep updated with the latest movies...
          </p>
        </div>
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_spa-salon.svg?w=96&q=75" alt="Spa & Salon" width="25" height="25" className="ms-2" />
          <strong>Spa & Salon</strong>
          <p>
            Skip the wait to get pampered at a spa or a salon. In a few clicks, 'Book an Appointment'...
          </p>
        </div>
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_repairservices.svg?w=96&q=75" alt="Repair & Services" width="25" height="25" className="ms-2" />
          <strong>Repair & Services</strong>
          <p>
            Find the 'Best Deal', be it for repairing your air-conditioner, getting your car serviced...
          </p>
        </div>
      </div>

      <div className="row text-left mt-3">
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_doctorappointment.svg?w=96&q=75" alt="Doctor Appointment" width="25" height="25" className="ms-2" />
          <strong>Doctor Appointment</strong>
          <p>Book appointments with top doctors in your city with ease.</p>
        </div>
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_realestateagent.svg?w=96&q=75" alt="Real Estate Agents" width="25" height="25" className="ms-2" />
          <strong>Real Estate Agents</strong>
          <p>Find trusted real estate agents for buying, selling, or renting properties.</p>
        </div>
        <div className="col-md-3">
          <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/ftr_onlinerecharge.svg?w=96&q=75" alt="Online Recharge" width="25" height="25" className="ms-2" />
          <strong>Online Recharge/Bill Payment</strong>
          <p>Recharge your mobile or pay bills instantly through Justdial.</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-body-secondary">
          Some of the other services that can be of assistance to you for leisure, health and home convenience are...
        </p>
      </div>

      <h4>Popular Categories</h4>
      <div className="row text-center">
        <div className="col-md-2">Accommodation</div>
        <div className="col-md-2">Astrology</div>
        <div className="col-md-2">Automobiles & Two Wheelers</div>
        <div className="col-md-2">Business & Legal</div>
        <div className="col-md-2">Education</div>
        <div className="col-md-2">Events & Weddings</div>
      </div>

         <p>
        Real Estate Agents | Book Shops | Aadhaar Card Agents | Yoga Classes |
        Estate Agents For Land | Pmjay Scheme Hospitals | Tutorials For IIT JEE
        | Mobile Phone Repair & Services-MI | Wrist Watch Dealers | Education
        Consultants | Battery Operated Scooter Dealers-OLA | Entertainment
        Centres | DTH TV Broadcast Service Providers-Sun Direct | AC Repair &
        Services-Blue Star | Tnpsc Tutorials | Mobile Phone Simcard
        Dealers-Jio | MPSC Tutorials | Shoe Dealers-Nike | Tirupati Darshanam
        Ticketing Services | Bitcoin Services | Mobile Phone Repair &
        Services-Nothing | Cat Tutorials | Lawyers For District Court |
        Ayushman Bharat Yojana Consultants | Lawyers For Supreme Court |
        Sports Shoe Dealers | Courier Services For Ahmedabad | Internet Payment
        Gateway Solution Providers | Taxi Services For Inter City | BPSC
        Tutorials | Courier Services For Canada | Demat Account Services |
        Automobile Part Dealers-Ashok Leyland | Prp Hair Transplantation
        Treatment Doctors | Mutual Fund Agents-SBI | Courier Services For Dubai
        | BEST Enquiry | Pickleball Courts | Khatu Shyam Bhajan Singers | Dairy
        Product Retailers-Amul | Tutorials For Mppsc | Uber Autorickshaw
        Attachment Services | Football Dealers | Courier Services For Surat |
        Battery Operated Auto Rickshaw Dealers-Mini Metro | Electricity
        Suppliers-Kseb | Courier Services For Tirupati | Packers And Movers For
        Hyderabad | Newspaper Advertising Agencies-Dainik Bhaskar | Tutorials
        For MHT CET
      </p>

      <h4>Trending Searches</h4>
      <p>
        Deals and Offers | Kotak Mahindra Banks | INOX Cinemas | Canara Banks |
        Ratnakar Banks | PVR Cinemas | ICICI Banks | HDFC Banks | AU Small
        Finance Bank | Bank Of Maharashtra | Bank Of India | Axis Banks | IDFC
        First Banks | Maharashtra Gramin Banks | Catholic Syrian Banks | Saraswat
        Co Operative Banks | Punjab & Sind Banks | State Bank Of India | Union
        Bank Of India | Punjab National Banks | Bank Of Baroda | Lifestyle
        Stores | Behrouz Biryani | Fastrack | The Good Bowl | Sony | Yes Banks |
        Croma | Dell Exclusive Stores | Beverly Hills Polo Club | Joyalukkas
        Jewellery | Kalyan Jewellers | Flying Machine | Lenovo Exclusive Store |
        Reliance Digital | Vijay Sales | Duroflex | Anytime Fitness | Kromakay
        Salons | Toni&Guy Salons | Bakingo | Barbeque Nation Restaurants |
        McDonalds | Sweet Truth Cake Shops | ALDO Stores | Helios | Inglot
        Stores | LEE Stores | Max Stores | US Polo Assn | Wrangler | Levi's |
        Apple Store | IFB Point | LG | Oppo Exclusive Showroom | Federal Banks |
        IDBI Banks | Bandhan Banks | DBS Banks | Karur Vysya Banks | Indusind
        Banks | Central Bank Of India
      </p>

      <h4>Explore JD Collections</h4>
      <p>
        Travel & Tourism | Beauty & Fashion | Health & Fitness | Food & Beverage
        | Finance | On demand Services | Home & Living | Education & Career |
        Recreation | Jd Business Guide
      </p>

      <h4>Popular Cities</h4>
      <p>
        Bangalore | Mumbai | Chennai | Delhi | Hyderabad | Pune | Ahmedabad |
        Lucknow | Patna | Jaipur | Indore | Kochi | Kolkata | Coimbatore | Nagpur
        | Ludhiana | Agra | Bhubaneshwar | Bhopal | Guwahati | Surat | Madurai |
        Visakhapatnam | Sonepat | Vadodara | Meerut | Thiruvananthapuram |
        Gurgaon | Kozhikode | Varanasi | Siliguri | Allahabad | Rajkot |
        Ghaziabad | Mysore | Noida | Chandigarh | Navi-Mumbai | Vijayawada |
        Durgapur | Srinagar | Nashik | Panipat | Jammu | Jodhpur |
        Udaipur-Rajasthan | Thane | Raipur-Chhattisgarh | Amritsar | Jabalpur
      </p>

      <div className="row mt-4">
        {/* Quick Links */}
        <div className="col-md-3">
          <h6 className="fw-bold mb-3">Quick Links</h6>
          <ul className="list-unstyled text-start">
            <li>About us</li>
            <li>Investor Relations</li>
            <li>We're hiring</li>
            <li>Customer Care</li>
            <li>Free Listing</li>
            <li>What's New</li>
            <li>Report a Bug</li>
            <li>B2B Sitemap</li>
            <li>Sitemap</li>
            <li>Advertise</li>
            <li>Media</li>
            <li>Testimonials</li>
            <li>Feedback</li>
            <li>Business Badge</li>
            <li>Jd Collection</li>
            <li>Client Success Videos</li>
            <li>B2B India Sitemap</li>
            <li>Return & Exchange Policy</li>
          </ul>
        </div>

        {/* JD Verticals */}
        <div className="col-md-9">
          <h6 className="fw-bold mb-3">JD Verticals</h6>
          <div className="row text-start">
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>B2B</li>
                <li>Accommodation</li>
                <li>Automobiles & Two Wheelers</li>
                <li>Education</li>
                <li>Entertainment</li>
                <li>Home & Garden</li>
                <li>Lights & Lighting</li>
                <li>Placements</li>
                <li>Sports & Entertainment</li>
                <li>Watches & Eyewear</li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>All India</li>
                <li>Advertising & PR</li>
                <li>Beauty & Personal Care</li>
                <li>Electronic Component</li>
                <li>Events & Wedding</li>
                <li>Housekeeping & Facility Management</li>
                <li>Luggage Bags & Cases</li>
                <li>Public</li>
                <li>Textile & Leather</li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>Doctors</li>
                <li>Agriculture</li>
                <li>Business & Legal</li>
                <li>Electronics</li>
                <li>Food & Beverage</li>
                <li>Industrial Plants & Machinery</li>
                <li>Office & School Supplies</li>
                <li>Restaurant</li>
                <li>Toys & Games</li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>Bills & Recharge</li>
                <li>Apparel</li>
                <li>Chemicals</li>
                <li>Energy</li>
                <li>Furniture</li>
                <li>IT Components</li>
                <li>Packaging & Printing</li>
                <li>Pet & Pet Supplies</li>
                <li>Security & Protection</li>
                <li>Travel</li>
                <li>Cricket</li>
                <li>Astrology</li>
                <li>Construction & Real Estate</li>
                <li>Engineering</li>
                <li>Health & Medical</li>
                <li>Jewellery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </Box>
  );
}

export default Footer;
