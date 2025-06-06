import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
  const navigate = useNavigate();

  const handleSelect = (page) => {
    navigate(page); // เปลี่ยนเส้นทางไปยังหน้าที่เลือก
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-travel"
        className="d-flex align-items-center"
      >
        🌐 เลือกสถานที่
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="/kohkradan">เกาะกระดาน</Dropdown.Item>
        <Dropdown.Item eventKey="/theseaparted">ทะเลแหวก</Dropdown.Item>
        <Dropdown.Item eventKey="/khaochompa">เขาชมภู่</Dropdown.Item>
        <Dropdown.Item eventKey="/trangchristendom">โบสถ์ตรัง</Dropdown.Item>
        {/* เพิ่มได้ตามต้องการ */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Header;
