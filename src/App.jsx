import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import KohKradan from "./component/KohKradan";
import KhaoChomPa from "./component/KhaoChomPa";
import TrangChurch from "./component/TrangChurch";
import TheSeaParted from "./component/TheSeaParted";
import ContactUs from "./component/ContactUs";
import AboutMe from "./component/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/koh-kradan" element={<KohKradan />} />
      <Route path="/KhaoChomPa" element={<KhaoChomPa />} />
      <Route path="/TrangChurch" element={<TrangChurch />} />
      <Route path="/TheSeaParted" element={<TheSeaParted />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutMe" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
