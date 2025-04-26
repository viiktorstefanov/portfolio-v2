import React from "react";

type ProjectsTitleProps = {
  title: string;
};

const ProjectsTitle: React.FC<ProjectsTitleProps> = ({ title }) => {
  return (
    <h2 className="text-4xl text-center font-semibold mb-[50px] text-white dark:text-primary-dark md:mb-[50px] md:text-5xl">
      {title}
    </h2>
  );
};

export default ProjectsTitle;
