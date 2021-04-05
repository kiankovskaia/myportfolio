import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarGroup } from "@material-ui/lab";

import { Avatar } from "@material-ui/core";

import { faFile } from "@fortawesome/free-solid-svg-icons";
import Myphoto from "../assets/img/kristina.jpg";

const Header = () => {
  return (
    <>
      <Jumbotron className="shadow-lg rounded border-dark mt-5">
        <Container fluid>
          <Row>
            <Col>
              <h1>About me</h1>
              <h5>
                  Kristina Iankovskaia is a Corporate Tax Accountant working at PwC. Kristina graduated from Brooklyn College with a bachelor's degree in Accounting in 2020. During her time at PwC, she met many professionals who motivated her and came to appreciate the importance and implementation of technology in the accounting process. She is am currently enrolled in an intensive Full Stack Coding Bootcamp at Columbia Engineering. Her end goal is to learn a valuable set of skills while enhancing my overall abilities in attention to detail and problem solving.Kristina is a firm believer that every day one must take steps to learn, grow and make positive actions towards self development. She enjoy the process of learning through experience because she knows that it will help her achieve career and life goals.
              </h5>

              <p>Resume:</p>

              <AvatarGroup style={{ justifyContent: "center" }}>
                <Avatar className="grow">
                  <a
                    href="https://drive.google.com/file/d/1lzuugxa59DucOl_2OS7nAsWYmAH6HEBb/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFile} />
                  </a>
                </Avatar>
              </AvatarGroup>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Image
                src={Myphoto}
                alt="Kristina iankovskaia"
                width={200}
                height={200}
                roundedCircle
                style={{ marginTop: "10%", marginBottom: "10%" }}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Header;