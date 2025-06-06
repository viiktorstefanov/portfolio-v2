import React from "react";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Bio } from "../../../constants/data";

const GithubIcon: React.FC = () => {
  return (
    <Link to={Bio.linkedin} target="_blank" className="hover:opacity-50">
      <FaGithub size={26} />
    </Link>
  );
};

export default GithubIcon;
