import React from "react";

type SkillsContainerProps = {
  children: React.ReactNode;
};

const SkillsContainer: React.FC<SkillsContainerProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-wrap mt-8 gap-[30px] justify-center">
      {children}
    </div>
  );
};

export default SkillsContainer;
