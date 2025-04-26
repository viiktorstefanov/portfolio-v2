import React from "react";

type CertificatesContainerProps = {
  children: React.ReactNode;
};

const CertificatesContainer: React.FC<CertificatesContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-center items-center gap-7 flex-wrap mt-16">
      {children}
    </div>
  );
};

export default CertificatesContainer;
