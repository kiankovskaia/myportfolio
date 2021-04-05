import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = (props) => {
  return (
    <>
      <Container>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
        <Row>
          <Col>{props.children}</Col>
        </Row>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
      </Container>
    </>
  );
};

export default Wrapper;