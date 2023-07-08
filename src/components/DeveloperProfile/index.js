import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

const DeveloperProfile = ({ developer }) => {
  const {
    name,
    skills,
    experience,
    location,
    linkedin,
    twitter,
    github,
    githubavatar,
  } = developer;

  return (
    <div className="profile-container">
      <div className="user">
        <img
          className="profile-pic"
          src={githubavatar}
          alt="githubProfilePic"
        />

        <h3 className="user-name">{name}</h3>
      </div>

      <p className="data-headings">
        Skills: <span className="data">{skills.join(", ")}</span>
      </p>
      <p className="data-headings">
        Experience: <span className="data">{experience}</span>
      </p>
      <p className="data-headings">
        Location: <span className="data">{location}</span>
      </p>

      <div>
        {linkedin && (
          <a
            className="icons linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
        {twitter && (
          <a
            className="icons twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
        {github && (
          <a
            className="icons github"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </div>
    </div>
  );
};

export default DeveloperProfile;
