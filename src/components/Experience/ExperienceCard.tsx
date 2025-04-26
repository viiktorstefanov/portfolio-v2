import React from "react";
import { Experience } from "../../types/constants";
import Header from "./ExperienceCardHeader";
import Image from "./ExperienceCardImage";
import Body from "./ExperienceCardBody";
import Role from "./ExperienceCardRole";
import Company from "./ExperienceCardCompany";
import Date from "./ExperienceCardDate";

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div
      className="w-full min-w-[330px] rounded-[10px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] p-[12px_16px] justify-between relative overflow-hidden flex flex-col border border-[#00000061] bg-[#171721e0] gap-[12px] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1.5
  md:gap-[8px]"
    >
      <Header>
        <Image url={experience.img} alt={experience.role} />
        <Body>
          <Role role={experience.role} />
          <Company company={experience.company} />
          <Date date={experience.date} />
        </Body>
      </Header>
    </div>
  );
};

export default ExperienceCard;
