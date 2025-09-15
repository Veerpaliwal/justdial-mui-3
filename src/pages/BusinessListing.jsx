import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function BusinessListing() {
  return (
    <main className="mt-5 p-0">
      {/* Hero Section */}
      <section className="v_bl_m1">
        <img
          src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/resfilter_banner_image.png?w=3840&q=75"
          alt="Italian food dinner table"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </section>

      {/* Top 3 Cards */}
      <section>
        <div className="container">
          <div className="row justify-content-between text-center">
            <div className="col-md-3">
              <RouterLink
                to="/businessDetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 d-flex align-items-center"
                  style={{ height: "90px", cursor: "pointer" }}
                >
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/resfilter_booktable.svg?w=128&q=75"
                    alt="Waffles"
                    style={{ height: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h5>BOOK A TABLE</h5>
                    <p className="text-body-secondary">Make reservations &gt;</p>
                  </div>
                </div>
              </RouterLink>
            </div>

            <div className="col-md-3">
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 d-flex align-items-center"
                  style={{ height: "90px", cursor: "pointer" }}
                >
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/resfilter_trending.svg?w=128&q=75"
                    alt="Pizza cartoon"
                    style={{ height: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h5>WHAT'S TRENDING?</h5>
                    <p className="text-body-secondary">Try It Yourself &gt;</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-3">
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 d-flex align-items-center"
                  style={{ height: "90px", cursor: "pointer" }}
                >
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/resfilter_orderfood.svg?w=128&q=75"
                    alt="Food ordering"
                    style={{ height: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h5>ORDER FOOD</h5>
                    <p className="text-body-secondary">5830 RESTAURANT &gt;</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Cards */}
      <section className="v_bl_m3">
        <div className="container mt-4">
          <div className="d-flex gap-3 flex-wrap">
            <div className="card" style={{ width: "13rem", height: "350px" }}>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_indianflavours.jpg?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icons/website/i_indianflavours.jpg?w=640&q=75 2x"
                className="card-img-top"
                alt="Indian curries"
              />
              <div className="card-body">
                <h5 className="card-title">Indian Flavours</h5>
                <p className="card-text">-Tandoori</p>
                <p className="card-text">-South Indian</p>
                <p className="card-text">-Pure Veg</p>
                <p className="card-text text-primary">-More</p>
              </div>
            </div>

            <div className="card" style={{ width: "13rem", height: "350px" }}>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_globalcuisines.jpg?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icons/website/i_globalcuisines.jpg?w=640&q=75 2x"
                className="card-img-top"
                alt="Global cuisines"
              />
              <div className="card-body">
                <h5 className="card-title">Global Cuisines</h5>
                <p className="card-text">-Continental</p>
                <p className="card-text">-Pan Asian</p>
                <p className="card-text">-Chinese</p>
                <p className="card-text text-primary">-More</p>
              </div>
            </div>

            <div className="card" style={{ width: "13rem", height: "350px" }}>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_nightlife.jpg?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icons/website/i_nightlife.jpg?w=640&q=75 2x"
                className="card-img-top"
                alt="Nightlife"
                style={{ height: "140px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">NightLife</h5>
                <p className="card-text">-Pubs</p>
                <p className="card-text">-Lounge Bars</p>
                <p className="card-text">-Night Clubs</p>
                <p className="card-text text-primary">-More</p>
              </div>
            </div>

            <div className="card" style={{ width: "13rem", height: "350px" }}>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_quickbites.jpg?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icons/website/i_quickbites.jpg?w=640&q=75 2x"
                className="card-img-top"
                alt="Quesadilla"
              />
              <div className="card-body">
                <h5 className="card-title">Quick Bites</h5>
                <p className="card-text">-Bakeries</p>
                <p className="card-text">-Coffee Shops</p>
                <p className="card-text">-Fast Food</p>
                <p className="card-text text-primary">-More</p>
              </div>
            </div>

            <div className="card" style={{ width: "13rem", height: "350px" }}>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_sweettooth.jpg?w=640&q=75"
                className="card-img-top"
                alt="Waffles"
              />
              <div className="card-body">
                <h5 className="card-title">Sweet Tooth</h5>
                <p className="card-text">-Cake Shops</p>
                <p className="card-text">-Desserts</p>
                <p className="card-text">-Donut Outlets</p>
                <p className="card-text text-primary">-More</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-primary" type="button">
            View All Categories
          </button>
        </div>
      </section>

      {/* Description & FAQs */}
      <section>
        <div className="container">
          <h5 className="mt-5">
            Unveiling the Culinary Treasures: Exploring Local Restaurants & Eateries near Mumbai
          </h5>
          <p>
            Welcome to the vibrant world of local restaurants, where every dish tells a story and every bite is an adventure!
          </p>
          <p>
            Welcome to the vibrant world of local restaurants, where every dish
            tells a story and every bite is an adventure! In this article, we will
            take a delightful journey through the bustling streets and cozy corners
            of your neighborhood to discover the hidden gems known as eateries, food
            places, and top-rated restaurants. From savory sensations to sweet
            delights, there's something for every palate in these food spots that
            define the essence of culinary excellence.
          </p>

          <h5>Exploring the Local Scene</h5>
          <p>
            When it comes to experiencing the true essence of a city or town, few
            things rival the joy of indulging in its local cuisine. Local
            restaurants offer a glimpse into the heart and soul of a community,
            serving up not just food but also a sense of belonging and tradition.
            Whether you're craving comfort food or eager to explore exotic flavors,
            these culinary havens have something to satisfy every craving.
          </p>

          <h5>Restaurant Menu: A Feast for the Senses</h5>
          <p>
            Step inside any local restaurant, and you'll be greeted by a symphony of
            aromas, colors, and flavors that titillate the senses. From sizzling
            steaks to aromatic curries, the restaurant menu is a treasure trove of
            culinary delights waiting to be explored. Each dish is carefully crafted
            to tantalize the taste buds and leave a lasting impression, ensuring
            that every meal is a memorable experience.
          </p>

          <h5>Global Cuisines: A World of Flavors at Your Doorstep</h5>
          <p>
            One of the greatest joys of dining at local restaurants is the
            opportunity to embark on a culinary journey around the world without
            ever leaving your neighborhood. From Italian trattorias to Thai street
            food stalls, these establishments offer a diverse array of global
            cuisines that reflect the rich tapestry of cultures that call your city
            home. Whether you're in the mood for a taste of India or craving the
            bold flavors of Mexico, you'll find it all right here in your own
            backyard.
          </p>

          <h5>Nightlife: Where Food Meets Entertainment</h5>
          <p>
            Local restaurants aren't just about great food; they're also hubs of
            social activity and nightlife. As the sun sets and the city comes alive,
            these eateries transform into vibrant gathering spots where friends come
            together to eat, drink, and make memories. Whether you're looking for a
            cozy corner to enjoy a romantic dinner or a lively atmosphere to dance
            the night away, the local restaurant scene has something for everyone.
          </p>

          <h5>Quick Bites: On-the-Go Gastronomy</h5>
          <p>
            In today's fast-paced world, convenience is key, and local restaurants
            are here to deliver. Whether you're rushing to catch a train or grabbing
            a quick bite between meetings, these food spots offer a delicious
            solution to your hunger pangs. From gourmet sandwiches to freshly baked
            pastries, you'll find an array of quick bites that are as satisfying as
            they are convenient.
          </p>

          <h5>Sweet Tooth: Indulge Your Dessert Desires</h5>
          <p>
            No meal is complete without something sweet to satisfy your sweet tooth,
            and local restaurants have you covered. From decadent cakes to
            artisanal chocolates, these establishments offer a tempting array of
            desserts that are sure to delight your taste buds. Whether you're
            celebrating a special occasion or simply treating yourself to a little
            indulgence, there's no shortage of sweet treats to choose from.
          </p>

          <h5>Foodie's Paradise: A Haven for Culinary Enthusiasts</h5>
          <p>
            For the true food lover, local restaurants are nothing short of
            paradise. With their commitment to quality, creativity, and innovation,
            these establishments cater to the discerning palate of the modern
            foodie. Whether you're seeking out the latest food trends or searching
            for a hidden gem off the beaten path, the local restaurant scene offers
            endless opportunities for culinary exploration and discovery. In
            conclusion, local restaurants are more than just places to eat; they're
            vibrant hubs of culture, community, and creativity. From the tantalizing
            aromas of the kitchen to the convivial atmosphere of the dining room,
            every aspect of the dining experience is designed to delight and
            inspire. So the next time you're craving a culinary adventure, why not
            step off the beaten path and discover the culinary treasures waiting to
            be found in your own neighborhood? Your taste buds will thank you!
          </p>

          <h3>Frequently Asked Questions</h3>
          <p id="rotatingText" className="text-center">
            5.9 Crore + product & services
          </p>
        </div>
      </section>
    </main>
  );
}