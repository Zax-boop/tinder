import React from "react";
import { People } from "./People";
import "./TinderCards.css"
import TinderCard from "react-tinder-card";


const TinderCards = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="CardDiv">
      {People.map((person, index) => {
        return (
          <TinderCard
            key={index}
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              className="ImgDiv"
              style={{ backgroundImage: `url(${person.image})` }}
              bg={person.image}
            >
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "0px",
                  left: "5px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              >
                {person.name}
              </h1>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
};
export default TinderCards;
