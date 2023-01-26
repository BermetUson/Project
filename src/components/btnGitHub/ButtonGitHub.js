import React from "react";

import gitHubBlack from "./../../img/icons/gitHub-black.svg";

const ButtonGitHub = () => {
  return (
    <a href="#!" className="btn-outline">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  );
};

export default ButtonGitHub;
