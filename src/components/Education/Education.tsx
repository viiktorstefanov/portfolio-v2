import React from "react";

import { education, menuItems } from "../../constants/data";

import Title from "./EducationTitle";
import Section from "./EducationSection";
import Container from "./EducationContainer";
import Wrapper from "./EducationWrapper";
import Timeline from "./EducationTimeline";

const Education: React.FC = () => {
  const educationInfo = menuItems.find((item) => item.label === "Education")!;

  return (
    <Section id={educationInfo.href}>
      <Container>
        <Title label={educationInfo.label} />
        <Wrapper>
          <Timeline education={education} />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Education;
