import React from "react";

type ProjectModalButtonsGroupProps = {
  children: React.ReactNode;
};

const ProjectModalButtonsGroup: React.FC<ProjectModalButtonsGroupProps> = ({
  children,
}) => {
  return <div className="flex justify-end gap-3 my-3 mx-0">{children}</div>;
};

export default ProjectModalButtonsGroup;
