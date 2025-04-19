import React from "react";
import { Project } from "../../types/constants";
import ProjectsCard from "./ProjectsCard";

type ProjectsContainerProps = {
  projects: Project[];
  onOpenModal: (id: string) => void;
};

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  projects,
  onOpenModal,
}) => {
  return (
    <div className="flex justify-center items-center gap-7 flex-wrap">
      {projects.map((project) => (
        <ProjectsCard
          key={project.id}
          project={project}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
