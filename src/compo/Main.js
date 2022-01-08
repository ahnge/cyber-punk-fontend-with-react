import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Main.css";
import { useGlobalContext } from "../context";

const Main = () => {
  const { obj } = useGlobalContext();

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHightLight">
          <div className="punkContainer">
            <img src={obj.image} className="selectedPunk" alt="" />
          </div>
        </div>

        <div className="right">
          <div className="punkDetails" style={{ color: "white" }}>
            <div className="title">{obj.name}</div>
            <span className="itemNumber">.#{obj.id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={obj.image} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>0x62962b70BD6C9e25B617A9f0e122dE6D8E3F3cDA</div>
                <div className="ownerHandle">@nayzawminnaing</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
