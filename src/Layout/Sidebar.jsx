import React, { useEffect } from "react";

import "./Sidebar.css";

import { useNavigate } from "react-router-dom";

import LogoIcon from "../Assets/Images/LogoIcon.svg";
import HerVest from "../Assets/Images/HerVest.svg";

export default function Sidebar({ links, pageTitle }) {
  useEffect(() => {}, []);

  let navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <div className="navigation">
          <input type="checkbox" className="toggle-menu" />
          <div className="hamburger"></div>
          <div className="side_menu">
            <div className="menu-inner-div">
              <div className="icondiv"></div>

              <div className="backtext" onClick={() => navigate("/")}>
                <span className="text-title">Back to dashboard</span>
              </div>
            </div>

            <div className="logo-description">
              <div className="business-details"></div>
            </div>

            <div className="selected-menu ">
              {links.map((x, i) => (
                <div
                  key={i}
                  onClick={() => console.log(x.path)}
                  className={
                    x.state === "active" ? "menu-items-active" : "menu-items"
                  }
                >
                  {x.name}
                </div>
              ))}
            </div>

            <div
              onClick={() => {
                console.log("/");
              }}
              className="help-logo-title"
            ></div>
          </div>
        </div>
        <div className="titl">
          <p className="tltletag">{pageTitle}</p>
        </div>

        <div className="search-cart">
          <div> </div>
          <div
            className="cart-icon"
            onClick={() => console.log("/viewQuote/myCart")}
          >
            <div className="header-logo">
              <div className="icon-logo">
                <img src={LogoIcon} alt="HerVest_logo" />
                <img src={HerVest} alt="HerVest_logo" />
              </div>
            </div>
          </div>

          <div> </div>
        </div>
      </header>
    </div>
  );
}
