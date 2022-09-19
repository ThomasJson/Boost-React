import "./publication.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMessageRounded, BiHeart, BiPaperPlane } from "react-icons/bi";

const Publication = () => {
  return (
    <>
      <Container fluid className="publication-bloc coL">
        <Container
          fluid
          className="publication-header rOw betWeen align-center"
        >
          <Container fluid className="publication-creator align-center rOw">
            <Container fluid className="profile-icon w-auto">
              <RiUser3Line />
            </Container>
            <Container fluid className="creator-name">
              Profile Name
            </Container>
          </Container>

          <Container fluid className="publication-params">
            <Container fluid>
              <AiOutlineMenu />
            </Container>
          </Container>
        </Container>
        <Container fluid className="publication-content"></Container>
        <Container fluid className="publication-react rOw">
          <Container>
            <BiHeart />
          </Container>
          <Container>
            <BiMessageRounded />
          </Container>
          <Container>
            <BiPaperPlane />
          </Container>

        </Container>
      </Container>
    </>
  );
};

export default Publication;
