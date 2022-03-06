import React from "react";
import Layout from "../Layout/Layout";
import './Home.css'
import profileimage from '../Assets/Images/profileimage.svg'



export default function Home() {

const data = [
  {
    "p": "Available balance",
    "price": "₦1,063,345.04",
},
{
  "p": "Impact Investments",
  "price": "₦1,007,345.04",
},

{
  "p": "Total Savings",
  "price": "₦2,007,345.04",
},

{
  "p": "Total Returns",
  "price": "₦56,000.00",
},


]

  return (
    <div>
      <Layout>
        <div className="home-">
          
            <header>
             
              <div className="header-wrapper">
                
              <div className="header-div">
                <img src={profileimage} alt="profile-img" className="header-image" />  
              </div>

              <div className="header-content">
                <p className="header-title">
                  <span className="header-greetings">Hello, </span> 
                  <p className="header-name">Oluwatobi</p>
                </p>  
          
              </div>  
              </div>


            </header>
          




      <div class="cover">
       
        <div className="cover-wrapper">
          
        {

data.map((x, i)=>{
  return (
    <div  key={i} className="hero-wrapper" >

      <p className="hero-text"  >{x.p}</p>
      <p className="hero-price"  >{x.price}</p>

    </div>
  )
})


}

          
        </div>

      </div>
          
          
          </div>
      </Layout>
    </div>
  );
}
