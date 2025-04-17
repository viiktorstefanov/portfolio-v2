import React from "react";

type EducationWrapperProps = {
  children: React.ReactNode;
};

const EducationWrapper: React.FC<EducationWrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1000px] mt-2.5 flex flex-col items-center justify-center gap-3 sm:items-center">
      {children}
    </div>
  );
};

export default EducationWrapper;
