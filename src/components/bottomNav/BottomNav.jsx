import "./bottomNav.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { RiHome4Line, RiSearchLine, RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <Navbar fixed="bottom">
      <Container fluid>
        <Nav as="ul" id="bottom-nav-items">
          <Nav.Item as="li">
            <NavLink to="/">
              <RiHome4Line />
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/search">
              <RiSearchLine />
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/profile">
              <Container className="profile-icon">
                <RiUser3Line/>
              </Container>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BottomNav;
