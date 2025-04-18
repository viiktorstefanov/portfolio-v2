import React from "react";
import { menuItems } from "../../constants/data";
import Section from "./HeroSection";
import Container from "./HeroContainer";
import Wrapper from "./HeroWrapper";
import HeroAnimation from "./HeroAnimation";
import InnerContainer from "./HeroInnerContainer";
import HeroLeftContainer from "./HeroLeftContainer";
import HeroLeftContainerTitle from "./HeroLeftContainerTitle";
import HeroTextLoop from "./HeroTextLoop";
import HeroLeftContainerSubtitle from "./HeroLeftContainerSubtitle";
import HeroRightContainer from "./HeroRightContainer";
import HeroImage from "./HeroImage";

const Hero: React.FC = () => {
  const heroInfo = menuItems.find((item) => item.label === "About")!;

  return (
    <Section id={heroInfo.href}>
      <Container>
        <Wrapper>
          <HeroAnimation />
        </Wrapper>
        <InnerContainer>
          <HeroLeftContainer>
            <HeroLeftContainerTitle />
            <HeroTextLoop />
            <HeroLeftContainerSubtitle />
          </HeroLeftContainer>
          <HeroRightContainer>
            <HeroImage />
          </HeroRightContainer>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Hero;
