import React from "react";

type HeroContainerProps = {
  children: React.ReactNode;
};

const HeroContainer: React.FC<HeroContainerProps> = ({ children }) => {
  return (
    <div className="clip-hero-polygon flex justify-center relative z-[1] px-[30px] py-[80px] md:px-[30px] md:py-[80px] max-md:py-[66px] max-[640px]:py-[32px]">
      {children}
    </div>
  );
};

export default HeroContainer;
