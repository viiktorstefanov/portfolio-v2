import React from "react";

type ProjectModalTagProps = {
  tag: string;
};

const ProjectModalTag: React.FC<ProjectModalTagProps> = ({ tag }) => {
  return (
    <span className="text-primary-app text-[14px] font-normal m-1 p-1 px-2 rounded-lg bg-[#2D2524] md:text-[14px] sm:text-[12px]">
      {tag}
    </span>
  );
};

export default ProjectModalTag;
