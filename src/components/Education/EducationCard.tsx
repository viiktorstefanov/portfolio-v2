import React from "react";
import { Education } from "../../types/constants";

type EducationCardProps = {
  education: Education;
};

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div
      className="w-[650px] rounded-[10px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] p-[12px_16px] 
flex flex-col justify-between gap-[12px] relative overflow-hidden transition-all duration-300 ease-in-out 
bg-[#171721e0] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 
md:max-w-[650px] md:p-[12px_16px] md:gap-[12px] 
max-md:p-[10px] max-md:gap-[8px] max-md:w-[300px]"
    >
      <div className="w-full flex gap-3 items-center">
        <img
          className="h-[40px] md:h-[50px] bg-black rounded-[10px] mt-1"
          src={education.img}
          alt={education.school}
          loading="lazy"
        />
        <div className="font-poppins w-full flex flex-col">
          <span className="text-white font-semibold text-[18px] max-md:text-[14px]">
            {education.school}
          </span>
          <span className="text-sm font-medium text-gray-400 md:text-base">
            {education.degree}
          </span>
          <span className="text-[12px] font-normal text-[#b1b2b3] sm:text-[12px]">
            {education.date}
          </span>
        </div>
      </div>
      <div className="w-full text-base font-normal text-opacity-99 mb-2.5 md:text-sm">
        <span className="text-white overflow-hidden max-w-full line-clamp-4">{education.desc}</span>
      </div>
    </div>
  );
};

export default EducationCard;
