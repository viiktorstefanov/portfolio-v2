import React from "react";

type ProjectsCardTagProps = {
  tag: string;
};

const ProjectsCardTag: React.FC<ProjectsCardTagProps> = ({ tag }) => {
  return (
    <span className="text-primary-app bg-[#2D2524] text-[12px] font-normal px-2 py-[2px] rounded-[10px]">
      {tag}
    </span>
  );
};

export default ProjectsCardTag;
