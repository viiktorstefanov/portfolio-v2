import React from "react";

type CertificatesContainerProps = {
  children: React.ReactNode;
};

const CertificatesContainer: React.FC<CertificatesContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-center items-center gap-7 flex-wrap">
      {children}
    </div>
  );
};

export default CertificatesContainer;
