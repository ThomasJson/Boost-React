import './homeScreen.scss'
import React from "react";
import ContactStories from "../../components/contactStories/ContactStories";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Publication from "../../components/publication/Publication";

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
