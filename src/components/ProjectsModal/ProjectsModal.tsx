import React from "react";
import { Modal } from "@mui/material";
import { Project } from "../../types/constants";
import Container from "./ProjectModalContainer";
import Wrapper from "./ProjectModalWrapper";
import YouTubePlayer from "../YouTubePlayer/YouTubePlayer";
import CloseButton from "./ProjectsModalCloseButton";
import Image from "./ProjectsModalImage";
import Title from "./ProjectsModalTitle";
import Tags from "./ProjectsModalTags";
import Tag from "./ProjectModalTag";
import Description from "./ProjectModalDescription";
import ButtonsGroup from "./ProjectModalButtonsGroup";
import Button from "./ProjectModalButton";

type ProjectsModalProps = {
  openModal: boolean;
  onCloseModal: () => void;
  project: Project;
};

const ProjectsModal: React.FC<ProjectsModalProps> = ({
  openModal,
  onCloseModal,
  project,
}) => {
  return (
    <Modal open={openModal} onClose={onCloseModal}>
      <Container>
        <Wrapper>
          <CloseButton onClick={onCloseModal} />
          {project.youTubeVideoId ? (
            <YouTubePlayer videoId={project.youTubeVideoId} />
          ) : (
            <Image url={project.imageView!} alt={project.title} />
          )}
          <Title title={project.title} />
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </Tags>
          <Description description={project.description}/>
          <ButtonsGroup>
              {project.github && <Button text={"View Code"} dull={true} url={project.github} />}
              {project.webapp && <Button text={"View Live App"} dull={false} url={project.webapp} />}
          </ButtonsGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectsModal;
