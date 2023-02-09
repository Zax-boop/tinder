import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="FooterWrapper">
      <div
        className="ICON"
        style={{
          color: "rgb(192, 192, 192)"
        }}
      >
        {/* <i class="fa fa-redo fa-flip-horizontal"/>                */}
        <div class="icon-flex">
          <div class="icon-wrapper">
            <i class="fa fa-redo fa-flip-horizontal"></i>
          </div>
        </div>
      </div>
      <div
        className="ICON"
        style={{
          color: "linear-gradient(90deg, #fd297b 0%, #ff5864 50%,  #ff655b 100%);"
        }}
      >
        <div class="icon-flex-times">
          <div class="icon-wrapper-times">
            <i class="fa fa-times"></i>
          </div>
        </div>
      </div>         
      <div
        className="ICON"
        style={{
          color: "rgb(254, 60, 114)"
        }}
      >
        <div class="icon-flex-heart">
          <div class="icon-wrapper-heart">
            <i class="fa fa-heart"></i>
          </div>
        </div>              
      </div>               
    </div>
  );
};
export default Footer;
