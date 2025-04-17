import React from "react";
import { Link } from "react-router-dom";
import { Bio } from "../../../constants/data";

const GithubButton: React.FC = () => {
  return (
    <Link
      to={Bio.github}
      target="_blank"
      className="font-poppins w-[max-content] flex justify-center items-center rounded-[20px] bg-primary-app text-black font-medium cursor-pointer text-base hover:opacity-70 p-2 px-4 brilliant "
    >
      Github Profile
    </Link>
  );
};

export default GithubButton;
