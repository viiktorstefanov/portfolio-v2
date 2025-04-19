import React from "react";

type ExperienceTitleProps = {
  title: string;
};

const ExperienceTitle: React.FC<ExperienceTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[32px] text-center font-semibold mt-3 text-white md:text-[42px] md:mt-5">
      {title}
    </h2>
  );
};

export default ExperienceTitle;
