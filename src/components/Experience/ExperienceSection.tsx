import React from "react";

type ExperienceSectionProps = {
  children: React.ReactNode;
  id: string;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  children,
  id,
}) => {
  return (
    <section
      id={id}
      className="font-poppins flex flex-col justify-center relative z-[1] items-center md:py-0 pt-10"
    >
      {children}
    </section>
  );
};

export default ExperienceSection;
