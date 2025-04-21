import React from "react";

type ProjectsCardImageProps = {
  url: string;
  alt: string;
  objectFit: string,
};

const ProjectsCardImage: React.FC<ProjectsCardImageProps> = ({ url, alt, objectFit }) => {
  return (
    <img
      src={url}
      alt={alt}
      className={`w-full h-[180px] bg-white rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] object-${objectFit} border-2 border-solid border-black`}
    />
  );
};

export default ProjectsCardImage;
