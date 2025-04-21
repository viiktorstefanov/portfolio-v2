import React from "react";

type CertificatesCardImageProps = {
  url: string;
  alt: string;
};

const CertificatesCardImage: React.FC<CertificatesCardImageProps> = ({
  url,
  alt,
}) => {
  return (
    <img
      className="w-full h-[350px] bg-white rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] object-cover"
      src={url}
      alt={alt}
    />
  );
};

export default CertificatesCardImage;
