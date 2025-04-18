import React from "react";

type SkillsCardTitleProps = {
  title: string;
};

const SkillsCardTitle: React.FC<SkillsCardTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[28px] font-semibold text-white mb-5 text-center">
      {title}
    </h2>
  );
};

export default SkillsCardTitle;
