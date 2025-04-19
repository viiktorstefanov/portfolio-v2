import React from "react";

type ProjectsCardTagsProps = {
  children: React.ReactNode;
};

const ProjectsCardTags: React.FC<ProjectsCardTagsProps> = ({ children }) => {
  return (
    <div className="w-full flex items-center flex-wrap gap-2 mt-1">
      {children}
    </div>
  );
};

export default ProjectsCardTags;
