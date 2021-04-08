  
import React from "react";
import { Container, Row, Jumbotron } from "react-bootstrap";
import Wrapper from "./components/Wrapper";
import "../../src/App.css";
const ProjectWrapper = (props) => {
  return (
    <Wrapper>
      <Jumbotron className="shadow-lg rounded border-dark mt-5">
        <Container fluid>
          <Row>{props.children}</Row>
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default ProjectWrapper;