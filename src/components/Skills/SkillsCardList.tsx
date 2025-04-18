import React from "react";

type SkillsCardListProps = {
  children: React.ReactNode;
};

const SkillsCardList: React.FC<SkillsCardListProps> = ({ children }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-5">{children}</div>
  );
};

export default SkillsCardList;
