import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TravelDropdown = () => {
  const navigate = useNavigate();

  const handleSelect = (page) => {
    navigate(page);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        variant="custom"
        id="dropdown-travel"
        className="d-flex align-items-center"
        style={{
          backgroundColor: "#333",      // สีดำอ่อน
          color: "#fff",                
          border: "1px solid #555",     // ปรับเส้นขอบให้ดูซอฟต์ขึ้น
          padding: "8px 16px",
          borderRadius: "6px",
        }}
      >
        🌐 เลือกสถานที่
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          backgroundColor: "#444", // เมนูพื้นหลังเป็นดำอ่อน
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        <Dropdown.Item eventKey="/koh-kradan" style={{ color: "#fff" }}>
          KohKradan
        </Dropdown.Item>
        <Dropdown.Item eventKey="/TheSeaParted" style={{ color: "#fff" }}>
          The Sea Parted
        </Dropdown.Item>
        <Dropdown.Item eventKey="/KhaoChomPa" style={{ color: "#fff" }}>
          Khao Chom Pa
        </Dropdown.Item>
        <Dropdown.Item eventKey="/TrangChurch" style={{ color: "#fff" }}>
          Trang Christendom
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TravelDropdown;
