import React from "react";

type HeroLeftContainerProps = {
  children: React.ReactNode;
};

const HeroLeftContainer: React.FC<HeroLeftContainerProps> = ({ children }) => {
  return (
    <div
      id="Left"
      className="text-poppins w-full order-1 
            max-[960px]:order-2 max-[960px]:mb-[30px] max-[960px]:flex max-[960px]:flex-col max-[960px]:items-center 
            max-[640px]:order-2 max-[640px]:mb-[30px] max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center"
    >
      {children}
    </div>
  );
};

export default HeroLeftContainer;
