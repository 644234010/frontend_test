import React, { useState } from "react";
import Footer from "../navbar/footer";

const AboutMe = () => {
  const [showQrModal, setShowQrModal] = useState(false);

  const openModal = () => setShowQrModal(true);
  const closeModal = () => setShowQrModal(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 15px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <img
          src="/img/020.png"
          alt="My Avatar"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #007bff",
          }}
        />

        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "15px", color: "#007bff" }}>
            👋 Hello! I'm Kittipat Chubua
          </h2>
          <p style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}>
            I'm a <strong>front-end developer</strong> with a passion for clean
            code, modern design, and creating digital experiences that feel
            intuitive and delightful.
          </p>
          <p style={{ fontSize: "16px", color: "#333", marginBottom: "20px" }}>
            I love building responsive web applications using technologies like
            <strong> React, Node.js, and Bootstrap 5</strong>. I’m also a huge
            fan of coffee, nature walks, and good books 📚.
          </p>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {/* ปุ่มเปิด modal แสดง QR Code */}
            <button
              onClick={openModal}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#28a745",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0056b3")}
              onMouseOut={(e) => (e.target.style.background = "#28a745")}
            >
              🔗 เพิ่มเพื่อน LINE
            </button>

            <a
              href="/pdf/resume.pdf"
              download="Resume.pdf"
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0056b3")}
              onMouseOut={(e) => (e.target.style.background = "#007bff")}
            >
              📄 Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal แสดง QR Code */}
      {showQrModal && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              maxWidth: "320px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>สแกน QR Code เพื่อเพิ่มเพื่อน</h3>
            <img
              src="/public/img/line.png" // วางไฟล์ QR code ของคุณไว้ที่ public/line-qrcode.png
              alt="LINE QR Code"
              style={{ width: "280px", borderRadius: "8px" }}
            />
            <button
              onClick={closeModal}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0056b3")}
              onMouseOut={(e) => (e.target.style.background = "#28a745")}
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
