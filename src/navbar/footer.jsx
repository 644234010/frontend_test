import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 mt-auto">
      <div className="mb-4">
        <Link to="/" className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
