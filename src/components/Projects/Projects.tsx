import React, { useMemo, useState } from "react";
import { menuItems, projects } from "../../constants/data";
import Section from "./ProjectsSection";
import Wrapper from "./ProjectsWrapper";
import Title from "./ProjectsTitle";
import Container from "./ProjectsContainer";
import ProjectsModal from "./ProjectsModal";
import { Project } from "../../types/constants";

const Projects: React.FC = () => {
  const projectsInfo = menuItems.find((item) => item.label === "Projects")!;
  const [openModal, setOpenModal] = useState<{
    state: boolean;
    id: string | null;
  }>({ state: false, id: null });

  const onOpenModal = (id: string) => {
    setOpenModal({ state: true, id });
  };

  const onCloseModal = () => {
    setOpenModal({ state: false, id: null });
  };

  const selectedProject = useMemo(() => {
    return openModal.id
      ? projects.find((proj: Project) => proj.id === openModal.id)
      : null;
  }, [openModal.id]);

  return (
    <Section id={projectsInfo.href}>
      <Wrapper>
        <Title title={projectsInfo.label} />
        <Container projects={projects} onOpenModal={onOpenModal} />
        {selectedProject && (
          <ProjectsModal
            openModal={openModal.state}
            onCloseModal={onCloseModal}
            project={selectedProject}
          />
        )}
      </Wrapper>
    </Section>
  );
};

export default Projects;
