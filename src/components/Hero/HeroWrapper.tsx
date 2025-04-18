import React from "react";

type HeroWrapperProps = {
  children: React.ReactNode;
};

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <div className="absolute flex justify-end top-1/2 left-1/2 w-full h-full max-w-[1360px] overflow-hidden px-[30px] transform -translate-x-1/2 -translate-y-1/2 md:justify-end md:px-[30px] max-md:justify-center max-md:px-0">
      {children}
    </div>
  );
};

export default HeroWrapper;
