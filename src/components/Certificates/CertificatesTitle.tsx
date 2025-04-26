import React from "react";

type CertificatesTitleProps = {
  label: string;
};

const CertificatesTitle: React.FC<CertificatesTitleProps> = ({ label }) => {
  return (
    <h1 className="font-poppins text-center font-semibold text-white text-4xl md:text-5xl m-0">
      {label}
    </h1>
  );
};

export default CertificatesTitle;
