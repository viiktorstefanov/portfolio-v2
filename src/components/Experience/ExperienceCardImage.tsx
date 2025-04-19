import React from "react";

type ExperienceCardImageProps = {
  url: string;
  alt: string;
};

const ExperienceCardImage: React.FC<ExperienceCardImageProps> = ({
  url,
  alt,
}) => {
  return (
    <img
      src={url}
      alt={alt}
      className="h-[80px] w-[10px] min-w-[100px] bg-black rounded-[10px] mt-[4px]"
    />
  );
};

export default ExperienceCardImage;
