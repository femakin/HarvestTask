import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
import profileimage from "../Assets/Images/profileimage.svg";
import carousellogo from "../Assets/Images/carousellogo.svg";
import Carousel from "react-elastic-carousel";
import Awardsbro from "../Assets/Images/Awardsbro .svg";
import Award2 from "../Assets/Images/Award2.svg";
import Womendayamico from "../Assets/Images/Womendayamico.svg";
import Cardcomponent from "../components/Cardcomponent";
import HomeMobile from "./HomeMobile";

export default function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 768, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 1200, itemsToShow: 4, pagination: false },
  ];

  const data = [
    {
      p: "Available balance",
      price: "₦1,063,345.04",
    },
    {
      p: "Impact Investments",
      price: "₦1,007,345.04",
    },

    {
      p: "Total Savings",
      price: "₦2,007,345.04",
    },

    {
      p: "Total Returns",
      price: "₦56,000.00",
    },
  ];

  const CarouselData = [
    {
      icon: carousellogo,
      text: "Saving for rainy days",
      price: "N400.000",
      progress: (
        <progress value="30" max="100">
          30%
        </progress>
      ),
    },
    {
      icon: carousellogo,
      text: "Saving for rainy days",
      price: "N300.000",
      progress: (
        <progress value="30" max="100">
          30%
        </progress>
      ),
    },
    {
      icon: carousellogo,
      text: "Saving for rainy days",
      price: "N200.000",
      progress: (
        <progress value="30" max="100">
          30%
        </progress>
      ),
    },
    {
      icon: carousellogo,
      text: "Saving for rainy days",
      price: "N400.000",
      progress: (
        <progress value="30" max="100">
          30%
        </progress>
      ),
    },
    {
      icon: carousellogo,
      text: "Saving for rainy days",
      price: "N400.000",
      progress: (
        <progress value="30" max="100">
          30%
        </progress>
      ),
    },
    {
      icon: carousellogo,
      text: "Saving for rainy days",
      price: "N400.000",
      progress: (
        <progress value="30" max="100">
          30%
        </progress>
      ),
    },
  ];

  const Carddetails = [
    {
      title: "Create a savings plan",
      subtitle: "Earn up to 12%",
      Icon: Awardsbro,
    },
    {
      title: "Invest in a Female Farmer",
      subtitle: "Get up to 25% returns per anum",
      Icon: Award2,
    },
    {
      title: "Invite your girls to HerVest",
      subtitle: "Share you girl code.",
      Icon: Womendayamico,
      share: "Share",
      btntext: "HG7FIB",
    },
  ];

  return (
    <div>
      <div className="dsktopscreen">
      <Layout>
        <div className="home-">
          <header>
            <div className="header-wrapper">
              <div className="header-div">
                <img
                  src={profileimage}
                  alt="profile-img"
                  className="header-image"
                />
              </div>

              <div className="header-content">
                <p className="header-title">
                  <span className="header-greetings">Hello, </span>
                  <p className="header-name">Oluwatobi</p>
                </p>
              </div>
            </div>
          </header>

          <div class="cover-">
            <div className="cover-wrapper--">
              {data.map((x, i) => {
                return (
                  <div key={i} className="hero-wrapper-">
                    <p className="hero-text">{x.p}</p>
                    <p className="hero-price">{x.price}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <section className="main-wrapper-text">
            <h1 className="main-watch">Watch your plans</h1>

            <p className="watch-sub">A goal without a plan is just a wish</p>
          </section>

          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
              {CarouselData.map((item, index) => (
                <div className="carousel-wrapper">
                  <div key={index} className="ttems-div">
                    <div className="image-p">
                      <div className="img-div">
                        <img src={item.icon} alt="Icon" className="item-icon" />
                      </div>
                      <p className="carousel-text">{item.text}</p>
                    </div>
                    <h1 className="carousel-price">{item.price}</h1>
                    <span id="progressbar" className="progress">
                      {" "}
                      {item.progress}
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="card-main-wrapper">
            {Carddetails.map((item, index) => {
              return (
                <Cardcomponent
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.Icon}
                  sharetext={item.share}
                  btn={item.btntext}
                />
              );
            })}
          </div>
        </div>
      </Layout>
      </div>

      <div className="mobilescreen">
        <HomeMobile/>
        
        
      </div>



    </div>
  );
}
