import React from "react";
import { Me } from "./Me";
import "./Personal_Profile.css"


const Personal_Profile = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="CardDiv-Profile">
      {Me.map((person, index) => {
        return (
          <div
            key={index}
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              className="ImgDiv-Profile"
              style={{ backgroundImage: `url(${person.image})` }}
              bg={person.image}
            >
              <h1
                className="h1-profile"
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "80px",
                  left: "5px",
                  fontSize: "30px",
                  fontWeight: "bold"
                }}
              >
                {person.name}
              </h1>
              <h2
                className="h2-profile"
                style={{
                color: "white",
                position: "absolute",
                bottom: "60px",
                left: "5px",
                fontSize: "13px",
                fontWeight: "bold"}}>
                <div className="h2-space">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                {person.location}
              </h2>
              <h3
                className="h3-profile"
                style={{
                color: "white",
                position: "absolute",
                bottom: "40px",
                left: "5px",
                fontSize: "13px",
                fontWeight: "bold"}}>
                <div className="h3-space">
                    <i class="fa-solid fa-graduation-cap"></i>                
                </div>
                {person.university}
              </h3>
              <h4
                className="h4-profile"
                style={{
                color: "white",
                position: "absolute",
                bottom: "20px",
                left: "5px",
                fontSize: "13px",
                fontWeight: "bold"}}>
                <div className="h4-space">
                    <i class="fa-solid fa-briefcase"></i>
                </div>
                {person.position}
              </h4>
              <h4
                className="h4-profile"
                style={{
                color: "white",
                position: "absolute",
                bottom: "0px",
                left: "5px",
                fontSize: "13px",
                fontWeight: "bold"}}>
                <div className="h4-space">
                    <i class="fa-solid fa-magnifying-glass"></i>               
                </div>
                {person.searching}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Personal_Profile;
