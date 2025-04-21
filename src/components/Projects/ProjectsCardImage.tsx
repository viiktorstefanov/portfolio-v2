import React from "react";

type ProjectsCardImageProps = {
  url: string;
  alt: string;
};

const ProjectsCardImage: React.FC<ProjectsCardImageProps> = ({ url, alt }) => {
  return (
    <img
      src={url}
      alt={alt}
      className="w-full h-[180px] bg-white rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] object-cover"
    />
  );
};

export default ProjectsCardImage;
