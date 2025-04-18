import React from "react";

type SkillsWrapperProps = {
  children: React.ReactNode;
};

const SkillsWrapper: React.FC<SkillsWrapperProps> = ({ children }) => {
  return (
    <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
      {children}
    </div>
  );
};

export default SkillsWrapper;
