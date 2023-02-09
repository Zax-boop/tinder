import React from "react";
import TinderCards from "./TinderCards";
import Footer from "./Footer";
import "./HeroSection.css"


function HeroSection() {
  return (
    <div className="DivWrapper">
      <TinderCards />
      <Footer />
    </div>
  );
}

export default HeroSection;