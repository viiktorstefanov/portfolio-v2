import React from "react";

type CertificatesWrapperProps = {
  children: React.ReactNode;
};

const CertificatesWrapper: React.FC<CertificatesWrapperProps> = ({
  children,
}) => {
  return (
    <div
      className="relative flex flex-col justify-between items-center w-full max-w-[1350px] px-0 pt-[10px] pb-[100px] gap-3
            md:flex-col"
    >
      {children}
    </div>
  );
};

export default CertificatesWrapper;
