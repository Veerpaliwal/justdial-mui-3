// BusinessDetails.jsx
import React, { useEffect, useState } from "react";

export default function BusinessDetails() {
  const pages = [
    // Page 1 (1-10)
    [
      {
        id: 1,
        name: "The Bombay Canteen",
        image:
          "https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=640&q=75 640w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=750&q=75 750w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=828&q=75 828w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=1080&q=75 1080w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=1200&q=75 1200w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=1920&q=75 1920w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=2048&q=75 2048w, https://content.jdmagicbox.com/comp/def_content_category/chinese-restaurants/chinese-7--chinese-restaurants-1-p4idy.jpg?w=3840&q=75 3840w",
        rating: 4.7,
        ratingsCount: "1200",
        address: "Lower Parel, Mumbai",
        openStatus: "Open until 11:00 pm",
        price: "₹1200 Price for two",
        suggestions: "Tasty food, 5 Suggestions",
      },
      {
        id: 2,
        name: "Shabari Hotel",
        image:
          "https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=640&q=75 640w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=750&q=75 750w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=828&q=75 828w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=1080&q=75 1080w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=1200&q=75 1200w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=1920&q=75 1920w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=2048&q=75 2048w, https://content.jdmagicbox.com/comp/def_content_category/south-indian-restaurants/new-dish-2-south-indian-restaurants-8-cf753.jpg?w=3840&q=75 3840w",
        rating: 4.2,
        ratingsCount: "800",
        address: "Andheri West, Mumbai",
        openStatus: "Open until 12:00 am",
        price: "₹900 Price for two",
        suggestions: "Delicious, 3 Suggestions",
      },
      {
        id: 3,
        name: "Bougan Villa",
        image:
          "https://content.jdmagicbox.com/v2/comp/mumbai/u2/022pxx22.xx22.000165734952.k5u2/catalogue/classic-restaurant-matunga-east-mumbai-north-indian-restaurants-1t4svkxxk0-250.jpg?w=640&q=75",
        rating: 4.5,
        ratingsCount: "950",
        address: "Ghatkopar East, Mumbai",
        openStatus: "Open until 10:00 pm",
        price: "₹800 Price for two",
        suggestions: "Cozy ambience, 4 Suggestions",
      },
      {
        id: 4,
        name: "Mao Family Restaurant",
        image:
          "https://content.jdmagicbox.com/v2/comp/mumbai/33/022pf016833/catalogue/tulsi-vihar-veg-restaurant-charkop-sector-1-mumbai-north-indian-restaurants-ljm78qyg5x-250.jpg?w=640&q=75",
        rating: 4.0,
        ratingsCount: "700",
        address: "Dhobi Talao, Mumbai",
        openStatus: "Open until 1:00 am",
        price: "₹1000 Price for two",
        suggestions: "Best service, 6 Suggestions",
      },
      {
        id: 5,
        name: "New Shahi Family",
        image:
          "https://content.jdmagicbox.com/v2/comp/mumbai/46/022p5463446/catalogue/new-shahi-family-restaurant-mira-road-east-thane-tandoori-restaurants.jpg",
        rating: 4.3,
        ratingsCount: "650",
        address: "Mira Road, Thane",
        openStatus: "Open until 2:00 am",
        price: "₹850 Price for two",
        suggestions: "Best cooks, 2 Suggestions",
      },
      {
        id: 6,
        name: "Rajus Kitchen",
        image:
          "https://content.jdmagicbox.com/comp/def_content_category/nanumal-bhojraj-11985063-fzothxndmc-250.jpg",
        rating: 4.1,
        ratingsCount: "500",
        address: "Borivali West, Mumbai",
        openStatus: "Open until 11:30 pm",
        price: "₹750 Price for two",
        suggestions: "Homely taste, 3 Suggestions",
      },
      {
        id: 7,
        name: "Sardarjis Kitchen",
        image:
          "https://content.jdmagicbox.com/v2/comp/navi_mumbai/m1/022pxx22.xx22.180704211040.y1m1/catalogue/sardarji-s-kitchen-ulwe-navi-mumbai-home-delivery-restaurants.jpg",
        rating: 4.4,
        ratingsCount: "850",
        address: "Ulwe, Navi Mumbai",
        openStatus: "Open until 12:30 am",
        price: "₹900 Price for two",
        suggestions: "Family friendly, 4 Suggestions",
      },
      {
        id: 8,
        name: "Tandoori Tales",
        image:
          "https://content.jdmagicbox.com/v2/comp/mumbai/z1/022pxx22.xx22.171225124045.z1/catalogue/tandoori-tales-andheri-east-mumbai-north-indian-restaurants.jpg",
        rating: 4.6,
        ratingsCount: "1100",
        address: "Andheri East, Mumbai",
        openStatus: "Open until 11:45 pm",
        price: "₹1000 Price for two",
        suggestions: "Delicious kebabs, 5 Suggestions",
      },
      {
        id: 9,
        name: "Spice Village",
        image:
          "https://content.jdmagicbox.com/v2/comp/mumbai/x3/022pxx22.xx22.160412121234.x3/catalogue/spice-village-kandivali-west-mumbai-restaurants.jpg",
        rating: 4.0,
        ratingsCount: "600",
        address: "Kandivali West, Mumbai",
        openStatus: "Open until 10:30 pm",
        price: "₹950 Price for two",
        suggestions: "Authentic flavors, 2 Suggestions",
      },
      {
        id: 10,
        name: "Oceanic Dine",
        image:
          "https://content.jdmagicbox.com/v2/comp/mumbai/y7/022pxx22.xx22.150623121234.y7/catalogue/oceanic-dine-mumbai-seafood-restaurants.jpg",
        rating: 4.5,
        ratingsCount: "900",
        address: "Colaba, Mumbai",
        openStatus: "Open until 11:00 pm",
        price: "₹1100 Price for two",
        suggestions: "Fresh seafood, 5 Suggestions",
      },
    ],
    // Page 2 (11-20)
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 11,
      name: `Royal Dine ${i + 11}`,
      image:
        "https://content.jdmagicbox.com/v2/comp/mumbai/w7/022pxx22.xx22.171225124045.w7/catalogue/royal-dine-mumbai.jpg",
      rating: (Math.random() * 2 + 3).toFixed(1),
      ratingsCount: `${Math.floor(Math.random() * 1000) + 200}`,
      address: `Mumbai Area ${i + 11}`,
      openStatus: "Open until 12:00 am",
      price: `₹${700 + i * 50} Price for two`,
      suggestions: `"Tasty dishes" ${Math.floor(Math.random() * 5) + 1} Suggestions`,
    })),
    // Page 3 (21-30)
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 21,
      name: `Green Leaf ${i + 21}`,
      image:
        "https://content.jdmagicbox.com/v2/comp/mumbai/v8/022pxx22.xx22.160412121234.v8/catalogue/green-leaf-mumbai.jpg",
      rating: (Math.random() * 2 + 3).toFixed(1),
      ratingsCount: `${Math.floor(Math.random() * 1000) + 200}`,
      address: `Mumbai Area ${i + 21}`,
      openStatus: "Open until 11:00 pm",
      price: `₹${750 + i * 50} Price for two`,
      suggestions: `"Healthy food" ${Math.floor(Math.random() * 5) + 1} Suggestions`,
    })),
    // Page 4 (31-40)
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 31,
      name: `Spicy Hub ${i + 31}`,
      image:
        "https://content.jdmagicbox.com/v2/comp/mumbai/x2/022pxx22.xx22.160412121234.x2/catalogue/spicy-hub-mumbai.jpg",
      rating: (Math.random() * 2 + 3).toFixed(1),
      ratingsCount: `${Math.floor(Math.random() * 1000) + 200}`,
      address: `Mumbai Area ${i + 31}`,
      openStatus: "Open until 10:30 pm",
      price: `₹${800 + i * 50} Price for two`,
      suggestions: `"Spicy delights" ${Math.floor(Math.random() * 5) + 1} Suggestions`,
    })),
    // Page 5 (41-50)
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 41,
      name: `Cafe Aroma ${i + 41}`,
      image:
        "https://content.jdmagicbox.com/v2/comp/mumbai/y3/022pxx22.xx22.150623121234.y3/catalogue/cafe-aroma-mumbai.jpg",
      rating: (Math.random() * 2 + 3).toFixed(1),
      ratingsCount: `${Math.floor(Math.random() * 1000) + 200}`,
      address: `Mumbai Area ${i + 41}`,
      openStatus: "Open until 11:30 pm",
      price: `₹${850 + i * 50} Price for two`,
      suggestions: `"Cozy cafe" ${Math.floor(Math.random() * 5) + 1} Suggestions`,
    })),
    // Page 6 (51-60)
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 51,
      name: `Tasty Treat ${i + 51}`,
      image:
        "https://content.jdmagicbox.com/v2/comp/mumbai/z9/022pxx22.xx22.171225124045.z9/catalogue/tasty-treat-mumbai.jpg",
      rating: (Math.random() * 2 + 3).toFixed(1),
      ratingsCount: `${Math.floor(Math.random() * 1000) + 200}`,
      address: `Mumbai Area ${i + 51}`,
      openStatus: "Open until 12:30 am",
      price: `₹${900 + i * 50} Price for two`,
      suggestions: `"Yummy food" ${Math.floor(Math.random() * 5) + 1} Suggestions`,
    })),
  ];

  const totalPages = pages.length;
  const [page, setPage] = useState(1);
  const [data, setData] = useState(pages[0]);
  const [finished, setFinished] = useState(false);

  // Scroll listener → detect 50%
  useEffect(() => {
    const handleScroll = () => {
      if (finished) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      if (scrollPercent >= 50) {
        setPage((prev) => {
          if (prev < totalPages) {
            return prev + 1;
          } else {
            setFinished(true);
            return prev;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [finished, totalPages]);

  // Append new page data
  useEffect(() => {
    if (page > 1 && pages[page - 1]) {
      setData((prev) => [...prev, ...pages[page - 1]]);
      setTimeout(() => {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        window.scrollTo({
          top: (docHeight - winHeight) * 0.5,
          behavior: "smooth",
        });
      }, 300);
    }
  }, [page]);

  return (
    <main className="mt-5 p-0">
      <section className="v_bl_m1">
        <img
          src="https://images.jdmagicbox.com/mumbai/p3/022pxx22.xx22.110316135203.w9p3/cbnr/000ac334d1958852d68bb0ba99e0c520.jpg"
          alt="Banner"
          style={{ width: "100%", objectFit: "cover", maxHeight: "400px" }}
        />
      </section>

      <p className="text-secondary mt-3">
        Mumbai &gt; Business Categories &gt; {data.length}+ Listings
      </p>
      <h4>Explore Businesses in Mumbai</h4>

      <div className="container mt-4">
        {data.map((cat) => (
          <div
            key={cat.id}
            className="d-flex align-items-start gap-3 mb-4 p-3 border rounded"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              width={150}
              height={150}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />

            <div className="flex-grow-1">
              <h5 className="mb-1">{cat.name}</h5>
              <p className="mb-1">
                <span
                  style={{
                    color: "#fff",
                    backgroundColor: "#28a745",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {cat.rating} ★
                </span>{" "}
                {cat.ratingsCount} Ratings
              </p>
              <p className="mb-1">{cat.address}</p>
              <p className="mb-1" style={{ color: "green" }}>
                {cat.openStatus}
              </p>
              <p className="mb-1">{cat.price}</p>
              <p className="mb-2">{cat.suggestions}</p>

              <div className="d-flex gap-2">
                <button className="btn btn-success btn-sm">Show Number</button>
                <button className="btn btn-primary btn-sm">Book a Table</button>
                <button className="btn btn-primary btn-sm">Menu</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {finished && (
        <p className="text-center text-success fw-bold mt-4">
          ✅ All data loaded. Now you can scroll freely!
        </p>
      )}
    </main>
  );
}

