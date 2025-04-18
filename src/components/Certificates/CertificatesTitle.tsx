import React from "react";

type CertificatesTitleProps = {
  label: string;
};

const CertificatesTitle: React.FC<CertificatesTitleProps> = ({ label }) => {
  return (
    <h1 className="text-[42px] text-white text-center font-semibold mt-5 mb-[50px] md:text-[42px] md:mt-5 md:mb-[50px] sm:mt-3 sm:text-[32px]">
      {label}
    </h1>
  );
};

export default CertificatesTitle;
