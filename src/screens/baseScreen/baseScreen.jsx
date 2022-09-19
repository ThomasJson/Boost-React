import React from "react";
import BottomNav from "../../components/bottomNav/BottomNav";
import HomeScreen from "../homeScreen/HomeScreen";

const BaseScreen = () => {
  return (
    <>
      <HomeScreen />
      <BottomNav />
    </>
  );
};

export default BaseScreen;
