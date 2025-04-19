import React from "react";

type ExperienceCardBodyProps = {
  children: React.ReactNode;
};

const ExperienceCardBody: React.FC<ExperienceCardBodyProps> = ({
  children,
}) => {
  return <div className="font-poppins w-full flex flex-col">{children}</div>;
};

export default ExperienceCardBody;
