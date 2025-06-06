import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div
        className="content d-flex flex-column justify-content-between p-4"
        style={{
          backgroundImage: "url('/img/03.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="position-absolute top-0 end-0 p-3 text-white"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            borderBottomLeftRadius: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="/ContactUs"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <h6 className="mb-0">Contact Us</h6>
            </a>
            <a
              href="/AboutMe"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <h6 className="mb-0">About Me</h6>
            </a>
          </div>
        </div>
        <div className="phuket" style={{ color: "#fff", width: "50%" }}>
          <div className="tnx mb-1">
            <h1
              style={{
                fontFamily: "'Prompt', sans-serif", // ตัวอย่างฟอนต์ไทย
                fontWeight: "bold",
              }}
            >
              <i className="fas fa-map-marker-alt me-2"></i> Thailand Travel
            </h1>
          </div>
          <div className="txt">
            <h2
              style={{
                fontFamily: "'Prompt', sans-serif", // ตัวอย่างฟอนต์ไทย
                fontWeight: "bold",
              }}
            >
              Travel to Trang Province.
            </h2>
          </div>
          <p className="mt-3">
            Tourist attractions you shouldn't miss in Trang Province
          </p>
        </div>

        {/* บล็อค 4 ช่องด้านล่างในพื้นหลัง */}
        <div className="d-flex flex-wrap justify-content-around bg-opacity-50 p-4 rounded">
          {/* บล็อค 1 */}
          <Link to="/koh-kradan" style={{ textDecoration: "none" }}>
            <div
              className="card m-2 position-relative overflow-hidden text-white"
              style={{
                width: "250px",
                height: "200px",
                border: "none",
                borderRadius: "12px",
                backgroundImage: "url('/img/02.png')",
                backgroundSize: "cover",
                backgroundPosition: "left",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 10)",
              }}
            >
              {/* ข้อความปักมุมบน */}
              <div
                className="position-absolute top-0 start-0 p-3 w-100"
                style={{
                  // background: "rgba(0, 0, 0, 0.4)",
                  borderBottomRightRadius: "12px",
                }}
              >
                <h5 className="card-title mb-1">Koh Kradan</h5>
                {/* <p className="card-text mb-0">
                เมืองมรดกโลก เต็มไปด้วยประวัติศาสตร์
              </p> */}
              </div>
            </div>
          </Link>

          {/* บล็อค 2 */}
          <Link to="/KhaoChomPa" style={{ textDecoration: "none" }}>
            <div
              className="card m-2 position-relative overflow-hidden text-white"
              style={{
                width: "250px",
                height: "200px",
                border: "none",
                borderRadius: "12px",
                backgroundImage: "url('/img/04.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 10)",
              }}
            >
              {/* ข้อความปักมุมบน */}
              <div
                className="position-absolute bottom-0 start-0 p-3 w-100"
                style={{
                  // background: "rgba(0, 0, 0, 0.4)",
                  borderBottomRightRadius: "12px",
                }}
              >
                <h5 className="card-title mb-1">Khao Chom Pa</h5>
                {/* <p className="card-text mb-0">
                เมืองมรดกโลก เต็มไปด้วยประวัติศาสตร์
              </p> */}
              </div>
            </div>
          </Link>

          {/* บล็อค 3 */}
          <Link to="/TrangChurch" style={{ textDecoration: "none" }}>
            <div
              className="card m-2 position-relative overflow-hidden text-white"
              style={{
                width: "250px",
                height: "200px",
                border: "none",
                borderRadius: "12px",
                backgroundImage: "url('/img/06.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 10)",
              }}
            >
              {/* ข้อความปักมุมบน */}
              <div
                className="position-absolute top-0 start-0 p-3 w-100"
                style={{
                  // background: "rgba(0, 0, 0, 0.4)",
                  borderBottomRightRadius: "12px",
                }}
              >
                <h5 className="card-title mb-1">Trang Christendom</h5>
                {/* <p className="card-text mb-0">
                เมืองมรดกโลก เต็มไปด้วยประวัติศาสตร์
              </p> */}
              </div>
            </div>
          </Link>

          {/* บล็อค 4 */}
          <Link to="/TheSeaParted" style={{ textDecoration: "none" }}>
            <div
              className="card m-2 position-relative overflow-hidden text-white"
              style={{
                width: "250px",
                height: "200px",
                border: "none",
                borderRadius: "12px",
                backgroundImage: "url('/img/07.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 10)",
              }}
            >
              {/* ข้อความปักมุมบน */}
              <div
                className="position-absolute bottom-0 start-0 p-3 w-100"
                style={{
                  // background: "rgba(0, 0, 0, 0.4)",
                  borderBottomRightRadius: "12px",
                }}
              >
                <h5 className="card-title mb-1">The Sea Parted</h5>
                {/* <p className="card-text mb-0">
                เมืองมรดกโลก เต็มไปด้วยประวัติศาสตร์
              </p> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
