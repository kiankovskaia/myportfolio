import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarGroup } from "@material-ui/lab";

import { Avatar } from "@material-ui/core";

import { faFile } from "@fortawesome/free-solid-svg-icons";
import Myphoto from "../assets/img/kristina.jpg";

const Header = () => {
  return (
    <div className="jumbotron jumboclass">
      <Row>
        <Col id="aboutme" className="col-9">
          <h1 className="display-4">about me</h1>
          <h5>
            Kristina Iankovskaia is a Corporate Tax Accountant working at PwC.
            Kristina graduated from Brooklyn College with a bachelor's degree in
            Accounting in 2020. During her time at PwC, she met many
            professionals who motivated her and came to appreciate the
            importance and implementation of technology in the accounting
            process. She is am currently enrolled in an intensive Full Stack
            Coding Bootcamp at Columbia Engineering. Her end goal is to learn a
            valuable set of skills while enhancing my overall abilities in
            attention to detail and problem solving.
            <br></br>Kristina is a firm believer that every day one must take
            steps to learn, grow and make positive actions towards self
            development. She enjoy the process of learning through experience
            because she knows that it will help her achieve career and life
            goals.
          </h5>
        </Col>
        <Col className="col-3">
          <Row>
            <Image
              src={Myphoto}
              alt="Kristina iankovskaia"
              width={200}
              height={200}
              roundedCircle
            />
          </Row>
          <Row>
            <Avatar className="grow ">
              <a
                href="https://drive.google.com/file/d/1lzuugxa59DucOl_2OS7nAsWYmAH6HEBb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="styleavatar" icon={faFile} />
              </a>
            </Avatar>
            <p>Resume</p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
