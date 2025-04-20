import React from "react";

type ProjectsWrapperProps = {
  children: React.ReactNode;
};

const ProjectsWrapper: React.FC<ProjectsWrapperProps> = ({ children }) => {
  return (
    <div className="font-poppins relative flex flex-col justify-between items-center w-full max-w-[1350px] py-[10px] pb-44 gap-[12px] md:flex-col">
      {children}
    </div>
  );
};

export default ProjectsWrapper;
