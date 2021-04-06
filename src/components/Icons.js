import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const Icons = (props) => {
  const {
    linkedin = "https://www.linkedin.com/in/kristina-iankovskaia/",
    instagram = "https://www.instagram.com/yourdilemma/",
    github = "https://github.com/kiankovskaia",
    youtube = "https://www.youtube.com/channel/UCH9DO7WPnjLbuBHUSJ4FO2w"
  } = props;

  return (
    <AvatarGroup spacing={6}>
      <Avatar className="grow">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="styleavatar" icon={faLinkedin} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="styleavatar" icon={faGithub} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="styleavatar" icon={faInstagram} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="styleavatar" icon={faYoutube} />
        </a>
      </Avatar>
    </AvatarGroup>
  );
};

export default Icons;