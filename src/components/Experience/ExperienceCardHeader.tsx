import React from "react";

type ExperienceCardHeaderProps = {
  children: React.ReactNode;
};

const ExperienceCardHeader: React.FC<ExperienceCardHeaderProps> = ({
  children,
}) => {
  return <div className="w-full flex gap-3">{children}</div>;
};

export default ExperienceCardHeader;
