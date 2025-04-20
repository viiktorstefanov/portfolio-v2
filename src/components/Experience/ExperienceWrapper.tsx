import React from "react";

type ExperienceWrapperProps = {
  children: React.ReactNode;
};

const ExperienceWrapper: React.FC<ExperienceWrapperProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col justify-between items-center w-full max-w-[1350px] py-[55px] gap-[12px] pb-36">
      {children}
    </div>
  );
};

export default ExperienceWrapper;
