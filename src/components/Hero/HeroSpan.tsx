import React from "react";

type HeroSpanProps = {
  children: React.ReactNode;
};

const HeroSpan: React.FC<HeroSpanProps> = ({ children }) => {
  return <span className="text-primary-app cursor-pointer">{children}</span>;
};

export default HeroSpan;
