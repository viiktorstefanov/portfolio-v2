import React from "react";

type SkillsCardTitleProps = {
  title: string;
};

const SkillsCardTitle: React.FC<SkillsCardTitleProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-semibold text-white mb-8 md:mb-9 text-center md:text-[28px] md:mt-4">
      {title}
    </h2>
  );
};

export default SkillsCardTitle;
