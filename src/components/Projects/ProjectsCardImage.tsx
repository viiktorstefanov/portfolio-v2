import React from "react";

type ProjectsCardImageProps = {
  url: string;
  alt: string;
  objectFit: ObjectFit;
};

const objectFitMap = {
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down",
} as const;

type ObjectFit = keyof typeof objectFitMap;

const ProjectsCardImage: React.FC<ProjectsCardImageProps> = ({
  url,
  alt,
  objectFit,
}) => {
  const objectFitClass = objectFitMap[objectFit];

  return (
    <img
      src={url}
      alt={alt}
      className={`w-full h-[180px] bg-white rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] ${objectFitClass} border-2 border-solid border-black`}
    />
  );
};

export default ProjectsCardImage;
