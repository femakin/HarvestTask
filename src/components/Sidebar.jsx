import React, { useContext, useState } from "react";
import "./Sidebar.css";
// import { Link, withRouter, Route  } from "react-router-dom";

// import { useHistory, useLocation } from 'react-router-dom';

import { useNavigate, useLocation } from "react-router-dom";

import dashboardicon from "../Assets/Images/dashboardicon.svg";
import PlansIcon from "../Assets/Images/PlansIcon.svg";
import LogoIcon from "../Assets/Images/LogoIcon.svg";
import HerVest from "../Assets/Images/HerVest.svg";

function Sidebar() {
  const navigate = useNavigate();
  let location = useLocation();

  const SidebarData = [
    {
      path: "/",
      name: "Dashboard",
      icon: LogoIcon,
      iconclicked: LogoIcon,
    },
    // {
    //   path: "/dashboard",
    //   name: "Dashboard",
    //   icon: PlansIcon,
    //   iconclicked: PlansIcon,
    // },
    {
      path: "/plans",
      name: "Plans",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },
    {
      path: "/purse",
      name: "Purse",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/transactions",
      name: "Transactions",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/banks_cards",
      name: "Banks & Cards",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/girl_code",
      name: "Girl Code",
      icon: PlansIcon,

      iconclicked: PlansIcon,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/portfolio",
      name: "Portfolio",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/bout_harvest",
      name: "About HerVest",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/support",
      name: "Support",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },

    {
      path: "/logout",
      name: "Logout",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },
  ];

  return (
    <>
      <div className="sidemenudetails">
      <div className="header-logo">
            <div className="icon-logo">
              <img src={LogoIcon} alt="HerVest_logo" />
              <img src={HerVest} alt="HerVest_logo" />
            </div>
          </div>

          <p className="menu">Menu</p>
        <div className="sidebar-main-content"   style={{ display: "flex", flexDirection: "column" }}>
         
          {SidebarData.map((x, i) => {
            return (
              <div
                 className="sidebar-content-inner"
                style={{
                  marginTop: "0px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                key={i}
              >
                <div
                  onClick={() => navigate(`${x.path}`)}
                  className="image-content"
                >
                  {location.pathname === x.path ||
                  location.pathname.split("/")[1] === x.path.split("/")[1] ? (
                    <img
                      src={x.iconclicked}
                      alt="iconimage"
                      width="18px"
                     
                      className="side-img"
                    />
                  ) : (
                    <img
                      src={x.icon}
                      width="18px"
                      // height="20px",
                        // style={{padding: "20px"}}
                      alt="iconimage"
                      className="side-img"
                    />
                  )}
                  <p
                    className={
                      location.pathname === x.path ||
                      x.path.split("/")[1] === location.pathname.split("/")[1]
                        ? "active4- "
                        : "inactive3-"
                    }
                  >
                    {x.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
