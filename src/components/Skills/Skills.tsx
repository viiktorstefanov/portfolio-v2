import React from "react";
import { menuItems, skills } from "../../constants/data";
import Wrapper from "./SkillsWrapper";
import Section from "./SkillsSection";
import Title from "./SkillsTitle";
import Container from "./SkillsContainer";
import SkillsCard from "./SkillsCard";

const Skills: React.FC = () => {
  const skillsInfo = menuItems.find((item) => item.label === "Skills")!;

  return (
    <Section id={skillsInfo.href}>
      <Wrapper>
        <Title />
        <Container>
          {skills.map((skill, index) => (
            <SkillsCard key={skill.id} skill={skill} index={index} />
          ))}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Skills;
