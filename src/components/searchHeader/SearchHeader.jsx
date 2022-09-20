import "./searchHeader.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RiSearchLine } from "react-icons/ri";

const SearchHeader = () => {
  return (
    <>
      <Navbar fixed="top" id="header-search" className="rOw betWeen">
        <h1>Title</h1>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Profile Name . . . "
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success"><RiSearchLine /></Button>
        </Form>
      </Navbar>
    </>
  );
};

export default SearchHeader;
