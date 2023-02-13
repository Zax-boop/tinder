import React from "react";
import TinderCards from "./TinderCards";
import "./Feed.css"
import Filter from "./filter";
import Footer from "./Footer";
import Ad from "./ad";


function Feed() {
  const myStyle={
    backgroundColor: '#f0f2f4',
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={myStyle}>
      <div className="container">
        <div className="ad-settings">
          <Ad/>
        </div>
        <div className="container-col">
          <div className="DivWrapper-hero">
            <TinderCards />
          </div>
          {/* <div className="footer-settings">
            <Footer/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Feed;