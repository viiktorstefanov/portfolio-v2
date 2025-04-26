import React from "react";

type ExperienceTitleProps = {
  title: string;
};

const ExperienceTitle: React.FC<ExperienceTitleProps> = ({ title }) => {
  return (
    <h2 className="text-4xl text-center font-semibold text-white md:text-5xl">
      {title}
    </h2>
  );
};

export default ExperienceTitle;
