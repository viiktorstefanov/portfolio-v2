import React, { useMemo } from "react";
import { certificates, menuItems } from "../../constants/data";
import Section from "./CertificatesSection";
import Wrapper from "./CertificatesWrapper";
import Title from "./CertificatesTitle";
import Container from "./CertificatesContainer";
import CertificatesCard from "./CertificatesCard";
import { Certificate } from "../../types/constants";

const Certificates: React.FC = () => {
  const certificatesInfo = useMemo(() => menuItems.find(item => item.label === "Certificates")!, []);

  return (
    <Section id={certificatesInfo.href}>
      <Wrapper>
        <Title label={certificatesInfo.label} />
        <Container>
          {certificates.map((item: Certificate) => (
            <CertificatesCard key={item.id} certificate={item} />
          ))}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Certificates;
