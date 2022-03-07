import React from "react";
import "./Sidebar.css";


import { useNavigate, useLocation } from "react-router-dom";


import PlansIcon from "../Assets/Images/PlansIcon.svg";
import LogoIcon from "../Assets/Images/LogoIcon.svg";
import HerVest from "../Assets/Images/HerVest.svg";
import Bag from "../Assets/Images/Bag.svg";
import Transactions from "../Assets/Images/Transactions.svg";
import banksandcards from "../Assets/Images/banksandcards.svg";
import Girlcode from "../Assets/Images/Girlcode.svg";
import Profile from "../Assets/Images/Profile.svg";
import Graph from "../Assets/Images/Graph.svg";
import About from "../Assets/Images/About.svg";
import support from "../Assets/Images/support.svg";
import Logout from "../Assets/Images/Logout.svg"

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
   
    {
      path: "/plans",
      name: "Plans",
      icon: PlansIcon,
      iconclicked: PlansIcon,
    },
    {
      path: "/purse",
      name: "Purse",
      icon: Bag,
      iconclicked: Bag,
    },

    {
      path: "/transactions",
      name: "Transactions",
      icon: Transactions,
      iconclicked: Transactions,
    },

    {
      path: "/banks_cards",
      name: "Banks & Cards",
      icon: banksandcards,
      iconclicked: banksandcards,
    },

    {
      path: "/girl_code",
      name: "Girl Code",
      icon: Girlcode,
      iconclicked: Girlcode,
    },

    {
      path: "/profile",
      name: "Profile",
      icon: Profile,
      iconclicked: Profile,
    },

    {
      path: "/portfolio",
      name: "Portfolio",
      icon: Graph,
      iconclicked: Graph,
    },

    {
      path: "/about_harvest",
      name: "About HerVest",
      icon: About,
      iconclicked: About,
    },

    {
      path: "/support",
      name: "Support",
      icon: support,
      iconclicked: support,
    },

    {
      path: "/",
      name: "Logout",
      icon: Logout,
      iconclicked: Logout,
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
