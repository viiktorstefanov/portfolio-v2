import React from "react";

type EducationTitleProps = {
    label: string,
}

const EducationTitle: React.FC<EducationTitleProps> = ({ label }) => {
  return (
    <h1 className="font-poppins text-center font-semibold text-white mt-5 sm:text-[42px] sm:mt-3">
      {label}
    </h1>
  );
};

export default EducationTitle;
