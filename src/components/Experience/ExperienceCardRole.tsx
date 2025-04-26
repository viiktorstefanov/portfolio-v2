import React from "react";

type ExperienceCardRoleProps = {
  role: string;
};

const ExperienceCardRole: React.FC<ExperienceCardRoleProps> = ({ role }) => {
  return (
    <h3 className="text-white font-semibold text-sm md:text-lg">{role}</h3>
  );
};

export default ExperienceCardRole;
