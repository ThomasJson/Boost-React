import "./homeHeader.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { BiMessageRounded, BiHeart } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";

const HomeHeader = () => {

  //TODO Header Fixed au Scroll

  return (
    <>
      <Navbar fixed='top' id="header-home" className="rOw betWeen">
        <h1>Title</h1>
        <Container className="top-nav-items">
          <Container className="icons-container">
            <BsPlusSquare />
          </Container>
          <Container className="icons-container">
            <BiHeart />
          </Container>
          <Container className="icons-container">
            <BiMessageRounded />
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeHeader;
