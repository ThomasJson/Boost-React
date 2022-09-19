import React from "react";
import BottomNav from "../../components/bottomNav/BottomNav";
import {Outlet} from 'react-router-dom';

const BaseScreen = () => {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
};

export default BaseScreen;
