import React from "react";

type HeroSectionProps = {
  id: string;
  children: React.ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = ({ id, children }) => {
  return <section className="clip-hero-polygon bg-black pt-[5%] md:pt-0" id={id}>{children}</section>;
};

export default HeroSection;
