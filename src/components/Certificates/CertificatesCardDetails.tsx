import React from "react";

type CertificatesCardDetailsProps = {
  children: React.ReactNode;
};

const CertificatesCardDetails: React.FC<CertificatesCardDetailsProps> = ({
  children,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-0 px-[2px] py-0">
      {children}
    </div>
  );
};

export default CertificatesCardDetails;
