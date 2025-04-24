import React, { useMemo } from "react";

import { education, menuItems } from "../../constants/data";

import Title from "./EducationTitle";
import Section from "./EducationSection";
import Container from "./EducationContainer";
import Wrapper from "./EducationWrapper";
import Timeline from "./EducationTimeline";
import EducationClipWrapper from "./EducationClipWrapper";

const Education: React.FC = () => {
  const educationInfo = useMemo(
    () => menuItems.find((item) => item.label === "Education")!,
    []
  );

  return (
    <EducationClipWrapper>
      <Section id={educationInfo.href}>
        <Container>
          <Title label={educationInfo.label} />
          <Wrapper>
            <Timeline education={education} />
          </Wrapper>
        </Container>
      </Section>
    </EducationClipWrapper>
  );
};

export default Education;
