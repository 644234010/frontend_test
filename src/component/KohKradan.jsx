import React from "react";
import Footer from "../navbar/footer";
import TravelDropdown from "../navbar/TravelDropdown";


const KohKradan = () => {
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
          🏝️ Koh Kradan (Kradan Island) – Trang, Thailand
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
                    src="/img/01.png"
                    className="d-block w-100"
                    alt="Koh Kradan 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/02.png"
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

          {/* ขวา: ข้อความ */}
          <div className="col-md-6 text-white">
            <p>
              Koh Kradan is a hidden gem located off the coast of Trang Province
              in southern Thailand. Known for its powdery white sand and
              crystal-clear turquoise waters, the island is often considered one
              of the most beautiful beaches in the country. The island is part
              of Hat Chao Mai National Park and offers a peaceful, uncrowded
              atmosphere—perfect for those seeking a tranquil beach getaway. The
              coral reefs surrounding the island make it a popular spot for
              snorkeling, diving, and kayaking. Unlike some of Thailand’s more
              developed islands, Koh Kradan maintains a natural and serene
              charm, with limited infrastructure and no roads—only small beach
              resorts and bungalows nestled in the trees. Visitors can enjoy
              romantic sunsets, secluded beaches, and marine biodiversity in an
              unspoiled environment. It’s also famously known for hosting
              underwater weddings, making it a unique destination for couples.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KohKradan;
