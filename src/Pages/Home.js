import React from "react";
import Slide1 from "./Slide1";
import WelcomeComponent from "./WelcomeComponent";
import AccountsDetail from "./AccountsDetail";
import LatestNews from "./LatestNews";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <Slide1 />
      <WelcomeComponent />
      <Services />
      <AccountsDetail />
      <LatestNews />
    </div>
  );
}
