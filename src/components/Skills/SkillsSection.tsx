import React from "react";

type SkillsSectionProps = {
  id: string;
  children: React.ReactNode;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center relative z-1 items-center pt-20"
    >
      {children}
    </section>
  );
};

export default SkillsSection;
