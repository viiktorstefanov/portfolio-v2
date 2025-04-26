import React from "react";

type SkillsCardListProps = {
  children: React.ReactNode;
};

const SkillsCardList: React.FC<SkillsCardListProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-1 mb-5 justify-items-center">
      {children}
    </div>
  );
};

export default SkillsCardList;
