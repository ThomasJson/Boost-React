import "./publication.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMessageRounded, BiHeart, BiPaperPlane } from "react-icons/bi";

const Publication = () => {
  return (
    <>
      <Container fluid className="">
        <Container fluid className="publication-bloc coL">
          {/* HEADER */}
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
          {/* CONTENT */}
          <Container fluid className="publication-content"></Container>
          {/* REACT */}
          <Container fluid className="publication-react rOw">
            <Container className="publication-icons">
              <BiHeart />
            </Container>
            <Container className="publication-icons">
              <BiMessageRounded />
            </Container>
            <Container className="publication-icons">
              <BiPaperPlane />
            </Container>
          </Container>
          {/* COUNT */}
          <Container fluid className="publications-count rOw">
            <Container>Nb</Container>
            <Container className="count-sort">Likes / Vues</Container>
          </Container>
          {/* POST DESCRIPTION */}
          <Container fluid className="publication-description rOw">
            <Container>Profile Name</Container>
            <Container className="description">blablabla ...</Container>
          </Container>
          {/* COMMENTAIRES */}
          <Container fluid className="publication-commentaires rOw align-center">
            <Container fluid className="profile-icon w-auto">
              <RiUser3Line />
            </Container>
            <Container className="commentaires">
              Ajouter un commentaire . . .
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Publication;
