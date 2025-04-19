import React from "react";

type ProjectsCardDescriptionProps = {
  description: string;
};

const ProjectsCardDescription: React.FC<ProjectsCardDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="font-normal text-[#b1b2b3] overflow-hidden mt-2 max-w-full text-ellipsis line-clamp-3">
      {description}
    </div>
  );
};

export default ProjectsCardDescription;
