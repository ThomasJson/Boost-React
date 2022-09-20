import "./registerStories.scss";
import React from "react";
import { Container } from "react-bootstrap";

const RegisterStories = () => {
  return (
    <>
      <Container
        fluid
        id="register-stories-container"
        className="rOw align-center"
      >
        <Container fluid className="register-story-container"></Container>
        <Container fluid className="register-story-container"></Container>
        <Container fluid className="register-story-container"></Container>
      </Container>
    </>
  );
};

export default RegisterStories;
