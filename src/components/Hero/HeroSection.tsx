import React from "react";

type HeroSectionProps = {
  id: string;
  children: React.ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = ({ id, children }) => {
  return <section id={id}>{children}</section>;
};

export default HeroSection;
