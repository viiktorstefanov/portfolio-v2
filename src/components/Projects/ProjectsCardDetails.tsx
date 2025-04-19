import React from "react";

type ProjectsCardDetailsProps = {
  children: React.ReactNode;
};

const ProjectsCardDetails: React.FC<ProjectsCardDetailsProps> = ({
  children,
}) => {
  return (
    <div className="w-full flex flex-col gap-0 px-[2px] py-0">{children}</div>
  );
};

export default ProjectsCardDetails;
