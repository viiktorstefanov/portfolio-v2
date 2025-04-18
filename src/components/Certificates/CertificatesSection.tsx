import React from "react";

type CertificatesSectionProps = {
  id: string;
  children: React.ReactNode;
};

const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  id,
  children,
}) => {
  return (
    <section
      className="clip-cetificate-polygon flex flex-col justify-center relative z-[1] items-center pt-20"
      id={id}
    >
      {children}
    </section>
  );
};

export default CertificatesSection;
