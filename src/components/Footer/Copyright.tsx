import React from "react";
import { Link } from "react-router-dom";
import { BioType } from "../../types/constants";

const currentYear = new Date().getFullYear();

type CopyrightProps = {
  bio: BioType;
};

const Copyright: React.FC<CopyrightProps> = ({ bio }) => {
  return (
    <p className="text-base text-black text-center">
      &copy; {currentYear}{" "}
      <Link
        to={bio.linkedin}
        target="_blank"
        className="text-black no-underline cursor-pointer hover:underline"
      >
        {bio.name}
      </Link>
      . All rights reserved.
    </p>
  );
};

export default Copyright;
