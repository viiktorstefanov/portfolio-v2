import React from "react";

type ProjectsCardTitleProps = {
  title: string;
};

const ProjectsCardTitle: React.FC<ProjectsCardTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[20px] font-semibold text-white overflow-hidden max-w-full line-clamp-2">
      {title}
    </h2>
  );
};

export default ProjectsCardTitle;
