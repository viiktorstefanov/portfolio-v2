import React from 'react';

type ProjectModalDescription = {
    description: string,
};

const ProjectModalDescription: React.FC<ProjectModalDescription> = ({description}) => {
  return (
    <p className='text-base font-normal text-justify text-white mx-[6px] my-2 sm:my-[6px]'>
      {description}
    </p>
  );
};

export default ProjectModalDescription;