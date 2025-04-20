import React from 'react';
import { CloseRounded } from "@mui/icons-material";

type ProjectsModalCloseButtonProps = {
    onClick: () => void,
};

const ProjectsModalCloseButton: React.FC<ProjectsModalCloseButtonProps> = ( { onClick } ) => {
  return (
    <CloseRounded className="absolute top-[10px] right-[20px] cursor-pointer" onClick={onClick}/>
  );
};

export default ProjectsModalCloseButton;