import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import "../../src/App.css";

const ProjectTemplate = (props) => {
  const { img, alt, title, description, deployedUrl, repo } = props;

  return (
    <div
      id="myportfolio"
      className="project-class container"
      style={{ display: "flex" }}
    >
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Image src={img} alt={alt} width={600} height={600} fluid />
      </Col>

      <Col>
        <h1>{title}</h1>
        <p>{description}</p>
        <Row>
          <Col>
            <Button href={deployedUrl} variant="outline-dark">
              start
            </Button>
          </Col>
          <p>|</p>
          <Col>
            <Button href={repo} variant="outline-dark">
              GitHub
            </Button>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default ProjectTemplate;
