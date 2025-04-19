import React from "react";
import { Project } from "../../types/constants";
import Image from "./ProjectsCardImage";
import Tags from "./ProjectsCardTags";
import Tag from "./ProjectsCardTag";
import Details from "./ProjectsCardDetails";
import Title from "./ProjectsCardTitle";
import Description from "./ProjectsCardDescription";

type ProjectsCardProps = {
  project: Project;
  onOpenModal: (id: string) => void;
};

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  project,
  onOpenModal,
}) => {
  return (
    <div
      className="w-[330px] h-[450px] bg-[#171721] cursor-pointer rounded-[10px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden p-[26px_20px] flex flex-col gap-[14px] transition-all duration-500 ease-in-out hover:-translate-y-[10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110"
      onClick={() => onOpenModal(project.id)}
    >
      <Image url={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </Tags>
      <Details>
        <Title title={project.title} />
        <Description description={project.description} />
      </Details>
    </div>
  );
};

export default ProjectsCard;
