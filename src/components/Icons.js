import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "@fortawesome/free-brands-svg-icons";


const Icons = (props) => {
  const {
    linkedin = "https://www.linkedin.com/in/kristina-iankovskaia/",
    instagram = "https://www.instagram.com/yourdilemma/",
    github = "https://github.com/kiankovskaia",
    youtube = "https://www.youtube.com/channel/UCH9DO7WPnjLbuBHUSJ4FO2w"
  } = props;

  return (
    <AvatarGroup spacing={4}>
      <Avatar className="grow">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </Avatar>
    </AvatarGroup>
  );
};

export default Icons;