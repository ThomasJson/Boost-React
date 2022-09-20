import "./searchByTag.scss";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RiHashtag } from "react-icons/ri";

const SearchByTag = () => {
  return (
    <>
      <Container fluid id="tag-container">

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Tag . . . "
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">
            <RiHashtag />
          </Button>
        </Form>
        
      </Container>
    </>
  );
};

export default SearchByTag;
