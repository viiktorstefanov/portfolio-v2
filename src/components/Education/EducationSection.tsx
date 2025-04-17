import React from "react";

type EducationSectionProps = {
  id: string;
  children: React.ReactNode
};

const EducationSection: React.FC<EducationSectionProps> = ({ id, children }) => {
  return (
    <section
      className="h-[50dvh] flex flex-col justify-center items-center relative z-[1] pb-[60px] max-[960px]:pb-0"
      id={id}
    >
        {children}
    </section>
  );
};

export default EducationSection;
