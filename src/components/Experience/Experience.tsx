import React from "react";
import { experiences, menuItems } from "../../constants/data";
import Section from "./ExperienceSection";
import Wrapper from "./ExperienceWrapper";
import Title from "./ExperienceTitle";
import Timeline from "./ExperienceTimeline";

const Experience: React.FC = () => {
  const experienceInfo = menuItems.find((item) => item.label === "Experience")!;

  return (
    <Section id={experienceInfo.href}>
      <Wrapper>
        <Title title={experienceInfo.label} />
        <Timeline experiences={experiences} />
      </Wrapper>
    </Section>
  );
};

export default Experience;
