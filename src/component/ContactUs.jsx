import React, { useState } from "react";
import Footer from "../navbar/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรงนี้สามารถเพิ่ม logic ส่งข้อมูลไป server ได้
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 15px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "800px",
          backgroundColor: "#ffffffcc", // สีขาวโปร่งแสง
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* ภาพการ์ตูนด้านข้าง */}
        <div style={{ flex: "0 0 150px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="Cartoon"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>

        {/* ฟอร์มติดต่อ */}
        <div style={{ flex: 1 }}>
          <h2 className="mb-4 text-center" style={{ color: "#333" }}>
            Contact Us
          </h2>

          {submitted ? (
            <div className="alert alert-success" role="alert">
              Thank you for contacting us! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ fontWeight: "600" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={{ borderRadius: "8px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontWeight: "600" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={{ borderRadius: "8px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{ fontWeight: "600" }}>
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                  style={{ borderRadius: "8px" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  borderRadius: "8px",
                  fontWeight: "600",
                  background: "#007bff",
                  color: "#fff",
                  padding: "12px",
                  fontSize: "16px",
                  transition: "background 0.3s",
                }}
              >
                ✉️ Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
