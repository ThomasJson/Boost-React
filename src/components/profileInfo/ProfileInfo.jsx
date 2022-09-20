import "./profileInfo.scss";
import React from "react";
import { Container } from "react-bootstrap";

const ProfileInfo = () => {
  return (
    <>
      <Container id="profile-infos">
        <Container fluid className="story-container border-gradient-purple"></Container>
        <Container className="rOw">
          <Container className="m-left">Nb Post</Container>
          <Container className="m-left">Nb Followers</Container>
        </Container>
      </Container>
    </>
  );
};

export default ProfileInfo;
