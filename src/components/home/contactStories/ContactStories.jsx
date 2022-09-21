import "./contactStories.scss";
import React from "react";
import { Container } from "react-bootstrap";

const ContactStories = () => {
  return (
    <Container
      fluid
      id="contact-stories-container"
      className="rOw align-center"
    >
      <Container fluid className="story-container border-gradient-purple"></Container>
      <Container fluid className="story-container border-gradient-purple"></Container>
      <Container fluid className="story-container border-gradient-purple"></Container>
      <Container fluid className="story-container border-gradient-purple"></Container>
      <Container fluid className="story-container border-gradient-purple"></Container>
    </Container>
  );
};

export default ContactStories;
