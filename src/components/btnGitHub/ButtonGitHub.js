import React from "react";

import gitHubBlack from "./../../img/icons/gitHub-black.svg";

const ButtonGitHub = ({ link }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  );
};

export default ButtonGitHub;
