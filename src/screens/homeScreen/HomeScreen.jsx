import './homeScreen.scss'
import React from "react";
import ContactStories from "../../components/home/contactStories/ContactStories";
import HomeHeader from "../../components/home/homeHeader/HomeHeader";
import Publication from "../../components/home/publication/Publication";

const HomeScreen = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <ContactStories />
        <Publication />
      </main>
    </>
  );
};

export default HomeScreen;
