import "./postOverview.scss";
import React from "react";
import { Container } from "react-bootstrap";

const PostOverview = () => {
  return (
    <>
      <Container className="postOverview-container">
        <Container className="publiOverview"></Container>
        <Container className="publiOverview"></Container>
        <Container className="publiOverview"></Container>
        <Container className="publiOverview"></Container>
        <Container className="publiOverview"></Container>
      </Container>
    </>
  );
};

export default PostOverview;
