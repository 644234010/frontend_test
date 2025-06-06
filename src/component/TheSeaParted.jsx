import React from "react";
import Footer from "../navbar/footer";
import TravelDropdown from "../navbar/TravelDropdown";

const TheSeaParted = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "#fff",
        display: "flex", // เพิ่ม
        justifyContent: "center", // เพิ่ม
        alignItems: "center", // เพิ่ม
        padding: "20px", // เว้นระยะด้านนอกหน่อย
      }}
    >
      <div
        style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}
      >
        <TravelDropdown />
      </div>

      <div
        className="container py-5"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "12px",
          maxWidth: "900px", // จำกัดความกว้างของกล่อง
          width: "100%", // เต็มความกว้างภายใน maxWidth
        }}
      >
        <h1 className="mb-4">The Sea Parted – Trang, Thailand</h1>

        <div className="row align-items-center">
          {/* ซ้าย: รูปภาพ / วิดีโอ Carousel */}
          <div className="col-md-6 mb-4">
            <div
              id="mediaCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ maxWidth: "100%" }}
            >
              <div className="carousel-inner rounded carousel-fixed-height">
                <div className="carousel-item active">
                  <img
                    src="/img/14.png"
                    className="d-block w-100"
                    alt="Koh Kradan 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/15.png"
                    className="d-block w-100"
                    alt="Koh Kradan 2"
                  />
                </div>
                {/* <div className="carousel-item">
                  <video className="d-block w-100" controls>
                    <source src="/video/kohkradan.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div> */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#mediaCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#mediaCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-6 text-white">
            <p>
              In Trang Province, this phenomenon can be observed at certain
              islands, such as Koh Mook or near Koh Kradan, where the receding
              tide unveils a walkable sand path between the islands. This unique
              event allows visitors to walk across the sea, surrounded by
              shallow, clear waters and panoramic island views. It’s a
              breathtaking natural spectacle and a favorite among photographers
              and adventurers. Timing is key — it only happens during specific
              tidal conditions, so planning ahead with a local guide or tour is
              recommended.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TheSeaParted;
