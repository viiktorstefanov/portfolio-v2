import React from "react";

type SkillsContainerProps = {
  children: React.ReactNode;
};

const SkillsContainer: React.FC<SkillsContainerProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-wrap mt-14 gap-7.5 justify-center pl-4 pr-4">
      {children}
    </div>
  );
};

export default SkillsContainer;
