import React from "react";

type ProjectsModalImageProps = {
  url: string;
  alt: string;
};

const ProjectsModalImage: React.FC<ProjectsModalImageProps> = ({
  url,
  alt,
}) => {
  return (
    <img
      src={url}
      alt={alt}
      className="w-full object-cover rounded-[12px] mt-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]"
      loading="lazy"
    />
  );
};

export default ProjectsModalImage;
