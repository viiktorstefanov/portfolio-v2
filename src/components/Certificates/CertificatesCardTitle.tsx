import React from "react";

type CertificatesCardTitleProps = {
  title: string;
};

const CertificatesCardTitle: React.FC<CertificatesCardTitleProps> = ({
  title,
}) => {
  const titleLength = title.length > 25;

  return (
    <h2
      className={`${
        titleLength ? "text-base" : "text-[20px]"
      } font-semibold text-white overflow-hidden max-w-full line-clamp-2 ${
        titleLength && "text-center"
      }`}
    >
      {title}
    </h2>
  );
};

export default CertificatesCardTitle;
