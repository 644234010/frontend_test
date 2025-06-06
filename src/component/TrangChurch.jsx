import React from "react";
import Footer from "../navbar/footer";
// import Header from "../navbar/header";
import TravelDropdown from "../navbar/TravelDropdown";

const TrangChurch = () => {
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
        <h1 className="mb-4">
          Trang Christendom – Trang, Thailand
        </h1>

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
                    src="/img/06.png"
                    className="d-block w-100"
                    alt="Koh Kradan 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/12.png"
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
            Though modest in size, the Christian community in Trang reflects the
            province’s cultural diversity. Visitors can find a few Catholic and
            Protestant churches scattered throughout the city and nearby
            districts. Some notable features include: Old Catholic churches with
            simple colonial-style facades. Missionary influence dating back to
            the late 19th and early 20th centuries. Community gatherings during
            Christmas and Easter, often involving locals and foreign residents.
            While not a major tourist attraction, Trang Christendom offers a
            quieter, more spiritual look at the region’s multi-faith society and
            is appreciated by travelers interested in religious history and
            local culture.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrangChurch;
