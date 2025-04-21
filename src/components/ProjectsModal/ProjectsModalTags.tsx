import React from "react";

type ProjectsModalTagsProps = {
  children: React.ReactNode;
};

const ProjectsModalTags: React.FC<ProjectsModalTagsProps> = ({ children }) => {
  return <div className="my-1 sm:my-2 flex flex-wrap">{children}</div>;
};

export default ProjectsModalTags;
