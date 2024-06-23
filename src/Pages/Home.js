import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slide1 from './Slide1';
import Compete from './Compete';
import Feed from './Feed';
import Track from './Track';
import GamingMatters from './GamingMatters';
import SearchComponent from './SearchComponent';
import Services from "./Services";


export default function Home() {
  return (
    <div>
     
      <Header/>
      <Slide1 />
      <Compete />
      <Services />
      <Feed />
    
      <Track />
      {/* <GamingMatters /> */}
      <SearchComponent />
      <Footer />
    </div>
  );
}
