import "./bottomNav.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { RiHome4Line, RiSearchLine, RiUser3Line } from "react-icons/ri";

const BottomNav = () => {
  return (
    <Navbar fixed="bottom">
      <Container fluid>
        <Nav defaultActiveKey="/home" as="ul" id="bottom-nav-items">
          <Nav.Item as="li">
            <Nav.Link href="/home">
              <RiHome4Line />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">
              <RiSearchLine />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">
              <Container className="profile-icon">
                <RiUser3Line/>
              </Container>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BottomNav;
