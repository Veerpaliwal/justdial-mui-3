import React from "react";

export default function BusinessDetails() {
  return (
    <main className="mt-5 p-0">
      {/* Hero Image */}
      <section className="v_bl_m1">
        <img src="/img/COLOURBOX56682770.png" alt="Banner" />
      </section>

      <p className="text-secondary mt-3">
        Mumbai &gt; Restaurants in Mumbai &gt; 150+ Listings
      </p>
      <h4>Best Restaurants in Mumbai - Order Food Online</h4>

      {/* ================= Filters ================= */}
      <div className="d-flex flex-wrap gap-2 p-3">
        {[
          "Sort By",
          "Price",
          "Cuisines",
          "Amenities",
          "Ratings",
          "Book a Table",
          "Online Ordering",
          "Open Now",
          "Trending",
        ].map((label, idx) => (
          <div className="dropdown" key={idx}>
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id={`btn${idx}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {label}
            </button>
            <ul className="dropdown-menu" aria-labelledby={`btn${idx}`}>
              <li>
                <a className="dropdown-item" href="#">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* ================= Restaurant Listings ================= */}
      <div className="container mt-4">
        {/* Bombay Dhaba */}
        <nav className="navbar bg-body-tertiary custom-navbar mb-3">
          <div className="container-fluid d-flex align-items-center gap-4">
            <img
              src="/img/e3602480a99f7625375b5bdc496879ba_featured_v2.png"
              alt="The Bombay Dhaba"
              width={200}
              height={200}
            />
            <img
              src="/img/image_veer.png"
              alt="Food"
              width={200}
              height={200}
            />
            <div className="d-flex flex-column gap-2">
              <h4 className="m-0">The Bombay Dhaba</h4>
              <button className="btn btn-success btn-sm">Show Number</button>
              <button className="btn btn-primary btn-sm">Book a Table</button>
              <button className="btn btn-primary btn-sm">Menu</button>
            </div>
          </div>
        </nav>

        {/* Harish Lunch Home */}
        <nav className="navbar bg-body-tertiary custom-navbar mb-3">
          <div className="container-fluid d-flex align-items-center gap-4">
            <img
              src="/img/123334-maharaja-bhog-2.png"
              alt="Harish Lunch Home"
              width={200}
              height={200}
            />
            <img
              src="/img/694da92de55d590cb6eed3bc1cdf8c12.png"
              alt="Food"
              width={200}
              height={200}
            />
            <div className="d-flex flex-column gap-2">
              <h4 className="m-0">Harish Lunch Home</h4>
              <button className="btn btn-success btn-sm">Show Number</button>
              <button className="btn btn-primary btn-sm">Book a Table</button>
              <button className="btn btn-primary btn-sm">Menu</button>
            </div>
          </div>
        </nav>

        {/* Daras Restaurant Bar */}
        <nav className="navbar bg-body-tertiary custom-navbar mb-3">
          <div className="container-fluid d-flex align-items-center gap-4">
            <img
              src="/img/f016dc0c435f3bb756c02774a9f670d7_featured_v2.png"
              alt="Daras Restaurant Bar"
              width={200}
              height={200}
            />
            <img
              src="/img/022pxx22.xx22.140125120818.png"
              alt="Food"
              width={200}
              height={200}
            />
            <div className="d-flex flex-column gap-2">
              <h4 className="m-0">Daras Restaurant Bar</h4>
              <button className="btn btn-success btn-sm">Show Number</button>
              <button className="btn btn-primary btn-sm">Book a Table</button>
              <button className="btn btn-primary btn-sm">Menu</button>
            </div>
          </div>
        </nav>

        {/* Malvan Tadka */}
        <nav className="navbar bg-body-tertiary custom-navbar mb-3">
          <div className="container-fluid d-flex align-items-center gap-4">
            <img
              src="/img/8de4e63edbfba859d50f996e93afcd6b_1573917008.png"
              alt="Malvan Tadka"
              width={200}
              height={200}
            />
            <img
              src="/img/screenshot-20181128-001155.png"
              alt="Food"
              width={200}
              height={200}
            />
            <div className="d-flex flex-column gap-2">
              <h4 className="m-0">Malvan Tadka</h4>
              <button className="btn btn-success btn-sm">Show Number</button>
              <button className="btn btn-primary btn-sm">Book a Table</button>
              <button className="btn btn-primary btn-sm">Menu</button>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
