import React from "react";

type ProjectsModalTitleProps = {
  title: string;
};

const ProjectsModalTitle: React.FC<ProjectsModalTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[28px] font-semibold text-white mt-2 mx-[6px] sm:mt-[6px]">
      {title}
    </h2>
  );
};

export default ProjectsModalTitle;
