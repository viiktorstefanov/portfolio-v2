import React, { useMemo } from "react";
import { menuItems } from "../../constants/data";
import Section from "./ContactSection";
import Title from "./ContactTitle";
import Container from "./ContactContainer";
import Wrapper from "./ContactWrapper";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const contactInfo = useMemo(
    () => menuItems.find((item) => item.label === "Contact")!,
    []
  );

  return (
    <Section id={contactInfo.href}>
      <Wrapper>
        <Title label={contactInfo.label} />

        <Container>
          <ContactForm />
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Contact;
