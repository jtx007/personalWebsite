import React from "react";
import githubicon from "../githubMarkLight32px.png";
import linkedinicon from "../linkedin.png";
import mediumicon from "../monogram.png";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <a href="https://github.com/jtx007">
        <img className="sidebar-icon" alt="github-icon" src={githubicon} />
      </a>
      <a href="https://www.linkedin.com/in/james-thomas007/">
        <img alt="linkedin-icon" className="sidebar-icon" src={linkedinicon} />
      </a>
      <a href="https://medium.com/@jamesjacobthomas7">
        <img className="sidebar-icon" alt="medium-icon" src={mediumicon} />
      </a>
      <a href="https://dev.to/jtx007">
        <img
          className="sidebar-icon"
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="jtx007's DEV Profile"
          height="30"
          width="30"
        />
      </a>
      <div className="vertical"></div>
    </nav>
  );
};

export default Sidebar;
