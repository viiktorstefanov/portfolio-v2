import React from "react";

type SkillsCardTitleProps = {
  title: string;
};

const SkillsCardTitle: React.FC<SkillsCardTitleProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-semibold text-white mb-8 text-center md:text-[28px]">
      {title}
    </h2>
  );
};

export default SkillsCardTitle;
