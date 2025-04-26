import React from "react";

type ProjectModalTagProps = {
  tag: string;
};

const ProjectModalTag: React.FC<ProjectModalTagProps> = ({ tag }) => {
  return (
    <span className="text-primary-app text-xs md:text-sm font-normal m-1 p-1 px-2 rounded-lg bg-[#2D2524]">
      {tag}
    </span>
  );
};

export default ProjectModalTag;
