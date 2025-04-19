import React from "react";

type ExperienceCardDateProps = {
  date: string;
};

const ExperienceCardDate: React.FC<ExperienceCardDateProps> = ({ date }) => {
  return (
    <h3 className="text-[12px] font-normal text-[#b1b2b3]">
      {date}
    </h3>
  );
};

export default ExperienceCardDate;
