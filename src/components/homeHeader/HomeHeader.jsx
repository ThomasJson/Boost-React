import "./homeHeader.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { BiMessageRounded, BiHeart } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";

const HomeHeader = () => {
  return (
    <div>
      <Container fluid id="header-home" className="fLex betWeen">
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
      </Container>
    </div>
  );
};

export default HomeHeader;
