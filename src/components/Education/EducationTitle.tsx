import React from "react";

type EducationTitleProps = {
    label: string,
}

const EducationTitle: React.FC<EducationTitleProps> = ({ label }) => {
  return (
    <h1 className="font-poppins text-center font-semibold text-white text-4xl md:text-5xl m-0">
      {label}
    </h1>
  );
};

export default EducationTitle;
