import React from 'react';

type ProjectModalWrapperProps = {
    children: React.ReactNode,
};

const ProjectModalWrapper: React.FC<ProjectModalWrapperProps> = ( { children } ) => {
  return (
    <div className='max-w-[800px] w-full rounded-2xl my-[50px] mx-[12px] h-min bg-[#171721] text-[#FFF] p-5 flex flex-col gap-3 relative'>
      {children}
    </div>
  );
};

export default ProjectModalWrapper;