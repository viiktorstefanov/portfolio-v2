import React from "react";

type ProjectsSectionProps = {
  children: React.ReactNode;
  id: string;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ children, id }) => {
  return (
    <section
      id={id}
      className="clip-projects-polygon flex flex-col justify-center relative z-[1] items-center pt-20 md:pt-30"
    >
      {children}
    </section>
  );
};

export default ProjectsSection;
