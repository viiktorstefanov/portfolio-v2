import React from "react";

type ExperienceCardCompanyProps = {
  company: string;
};

const ExperienceCardCompany: React.FC<ExperienceCardCompanyProps> = ({
  company,
}) => {
  return (
    <h3 className="text-[14px] font-medium text-gray-400">
      {company}
    </h3>
  );
};

export default ExperienceCardCompany;
