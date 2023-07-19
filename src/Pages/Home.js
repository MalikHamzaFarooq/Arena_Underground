import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slide1 from './Slide1';
import Compete from './Compete';
import Feed from './Feed';
import Profile from './Profile';
import Track from './Track';
import GamingMatters from './GamingMatters';
import Reward from './Reward';
import LFG from './LFG';


export default function Home() {
  return (
    <div>
     
      <Header/>
      <Slide1 />
      <Compete />
      <LFG />
      <Feed />
      <Profile />
      <Track />
      <GamingMatters />
      <Reward />
      <Footer />
    </div>
  );
}
