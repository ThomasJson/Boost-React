import "./contactStories.scss";
import React from "react";
import { Container } from "react-bootstrap";

const ContactStories = () => {
  return (
    <Container
      fluid
      id="contact-stories-container"
      className="fLex space-Evenly align-center"
    >
      <Container fluid className="story-container"></Container>
      <Container fluid className="story-container"></Container>
      <Container fluid className="story-container"></Container>
      <Container fluid className="story-container"></Container>
    </Container>
  );
};

export default ContactStories;
