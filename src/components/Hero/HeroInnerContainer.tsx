import React from "react";

type HeroInnerContainerProps = {
  children: React.ReactNode;
};

const HeroInnerContainer: React.FC<HeroInnerContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative flex justify-between items-center w-full max-w-[1100px] flex-col md:flex-row">
      {children}
    </div>
  );
};

export default HeroInnerContainer;
