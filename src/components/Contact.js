import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
  return (
    <>
        <Jumbotron className="shadow-lg rounded border-dark mt-5">
        <Container fluid>
          <Row>Miami, FL</Row>
<Row>+1 (347)-444-1697</Row>
<Row>k.iankovskaia@gmail.com</Row>
        </Container>
        </Jumbotron>
    </>
  );
};

export default Contact;