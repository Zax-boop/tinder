// import React from "react";
import { Companies } from "./Companies";
import "./TinderCards.css"
import TinderCard from "react-tinder-card";
import Footer from "./Footer";
import React, {useState, useEffect} from 'react'


const TinderCards = () => {
  // const onSwipe = () => {
  //   console.log("You swiped: " + "HI");
  // };
  // const [click, setClick] = useState(false);
  // const onClick = () => onSwipe();
  // const handleClick = () => setClick(!click);
  // const swipe = async (dir) => {
  //   if (flickOnSwipe) {
  //     await current.swipe(dir) // Swipe the card!
  //   }
  // }
  // const onCardLeftScreen = (myIdentifier) => {
  //   console.log(myIdentifier + " left the screen");
  // };
  return (
    <div className="CardDiv">
      {Companies.map((company, index) => {
        return (
            <TinderCard
              key={index}
              
              // onClick={onClick}
              className="swipe"
              // onSwipe={onSwipe}
              // onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
            >
              <div
                className="ImgDiv-feed"
                style={{ backgroundImage: `url(${company.image})` }}
                bg={company.image}
              >
                <h1
                  className="h1-profile"
                  style={{
                    color: "white",
                    position: "absolute",
                    bottom: "140px",
                    left: "5px",
                    fontSize: "30px",
                    fontWeight: "bold"
                  }}
                >
                  {company.name}
                </h1>
                <h2
                  className="h2-profile"
                  style={{
                  color: "white",
                  position: "absolute",
                  bottom: "120px",
                  left: "5px",
                  fontSize: "13px",
                  fontWeight: "bold"}}>
                  <div className="h2-space">
                      <i class="fa-solid fa-location-dot"></i>
                  </div>
                  {company.location}
                </h2>
                <h4
                  className="h4-profile"
                  style={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "5px",
                  fontSize: "13px",
                  fontWeight: "bold"}}>
                  <div className="h4-space">
                      <i class="fa-solid fa-magnifying-glass"></i>               
                  </div>
                  {company.searching}
                </h4>
                <h4
                  className="h4-profile"
                  style={{
                  color: "white",
                  position: "absolute",
                  bottom: "80px",
                  left: "5px",
                  fontSize: "13px",
                  fontWeight: "bold"}}>
                  <div className="h4-space">
                      <i class="fa-solid fa-briefcase"></i>               
                  </div>
                  {company.type}
                </h4>
              </div>
              <div className="foot-card">
                <Footer/>
              </div>
              {/* <button onClick={() => swipe('right')}>
                Click me
              </button> */}
            </TinderCard>
        );
      })}
    </div>
  );
};
export default TinderCards;
