import React from "react";
import { Link } from "react-router-dom";

type ProjectModalButtonProps = {
  text: string;
  dull: boolean;
  url: string;
};

const ProjectModalButton: React.FC<ProjectModalButtonProps> = ({
  text,
  dull,
  url,
}) => {
  return (
    <Link
      to={url}
      target="_blank"
      className={`
        w-full text-center text-sm md:text-base font-semibold px-4 py-3 rounded-lg
        transition-all duration-500 ease-in-out
        cursor-pointer no-underline
        ${
          dull
            ? "bg-[#1C1E27] text-[#b1b2b3] hover:bg-[#FDA72D] hover:text-black"
            : "bg-[#FDA72D] text-black hover:opacity-75"
        }
      `}
    >
      {text}
    </Link>
  );
};

export default ProjectModalButton;
