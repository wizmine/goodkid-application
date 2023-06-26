import React from "react";
import Marquee from "react-fast-marquee";

import STAR from "../../resources/marquee-star.png";

import "./appMarquee.scss";

const AppMarquee = () => {
  return (
    <div className="announcement">
      <Marquee gradient className="fast-marquee">
        <div className="announcement-text text1">
          <span className="marquee-text">DESIGN FOR SALE</span>
          <img className="marquee-star" src={STAR} alt="star" />
        </div>
        <div className="announcement-text text2">
          <span className="marquee-text">DESIGN FOR SALE</span>
          <img className="marquee-star" src={STAR} alt="star" />
        </div>
        <div className="announcement-text text2">
          <span className="marquee-text">DESIGN FOR SALE</span>
          <img className="marquee-star" src={STAR} alt="star" />
        </div>
        <div className="announcement-text text2">
          <span className="marquee-text">DESIGN FOR SALE</span>
          <img className="marquee-star" src={STAR} alt="star" />
        </div>
        <div className="announcement-text text2">
          <span className="marquee-text">DESIGN FOR SALE</span>
          <img className="marquee-star" src={STAR} alt="star" />
        </div>
      </Marquee>
    </div>
  );
};

export default AppMarquee;
