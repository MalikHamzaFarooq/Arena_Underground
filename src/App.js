import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Compete from "./InnerSections/Compete";
import LFG from "./InnerSections/LFG";
import Feed from "./InnerSections/Feed";
import Profile from "./InnerSections/Profile";
import Track from "./InnerSections/Track";
import GamingMatters from "./InnerSections/GamingMatters";
import Reward from "./InnerSections/Reward";
import Slide1 from "./InnerSections/Slide1";
import { Container } from "@mui/material";
import Slider from "react-slick";
import Feed1 from "../src/Assets/Feed1.png";
import Feed2 from "../src/Assets/Feed2.png";
import Feed3 from "../src/Assets/Feed3.png";

function App() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  // };

  return (
    <div className="App">
      <Header />
      <Slide1 />
      <Compete />
      <LFG />
      <Feed />

      {/* <Container> */}
        <Profile />
        <Track />
        <GamingMatters />
        <Reward />
      {/* </Container> */}
      <Footer />
    </div>
  );
}

export default App;

{
  /* <Slider
        {...settings}
        style={{
          zIndex: "900",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <div>
        <img src={Feed1} />
        </div>
        <div>
        <img src={Feed2} />
        </div>
        <div>
        <img src={Feed3} />
        </div>
        <div>
        <img src={Feed1} />
        </div>
      </Slider> */
}
