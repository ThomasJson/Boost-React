import "./profileHeader.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";

const ProfileHeader = () => {
  return (
    <>
      <Navbar fixed="top" id="header-profile" className="rOw betWeen">
        <h1>Name</h1>
        <Container className="top-nav-items">
          <Container className="icons-container">
            <BsPlusSquare />
          </Container>
          <Container className="icons-container">
            <AiOutlineMenu />
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default ProfileHeader;
