import React from "react";

type ProjectsTitleProps = {
  title: string;
};

const ProjectsTitle: React.FC<ProjectsTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[42px] text-center font-semibold mt-5 mb-[50px] text-white dark:text-primary-dark md:text-[42px] md:mt-5 md:mb-[50px] sm:text-[32px] sm:mt-3">
      {title}
    </h2>
  );
};

export default ProjectsTitle;
