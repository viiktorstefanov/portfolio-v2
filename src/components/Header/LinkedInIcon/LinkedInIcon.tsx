import React from "react";
import { BsLinkedin } from "react-icons/bs";

import { Link } from "react-router-dom";
import { Bio } from "../../../constants/data";

type LinkedInIconProps = {
  className?: string;
  size?: number;
};

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className, size = 24 }) => {
  return (
    <Link to={Bio.linkedin} target="_blank">
      <BsLinkedin size={size} className={className} />
    </Link>
  );
};

export default LinkedInIcon;
