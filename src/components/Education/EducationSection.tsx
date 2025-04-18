import React from "react";

type EducationSectionProps = {
  id: string;
  children: React.ReactNode
};

const EducationSection: React.FC<EducationSectionProps> = ({ id, children }) => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-20 relative z-[1] pb-[60px] max-[960px]:pb-0"
      id={id}
    >
        {children}
    </section>
  );
};

export default EducationSection;
