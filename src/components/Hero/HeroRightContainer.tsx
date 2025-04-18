import React from "react";

type HeroRightContainerProps = {
  children: React.ReactNode;
};

const HeroRightContainer: React.FC<HeroRightContainerProps> = ({
  children,
}) => {
  return (
    <div
      id="Right"
      className="w-full flex order-2 justify-end gap-3
            max-[960px]:order-1 max-[960px]:justify-center max-[960px]:items-center max-[960px]:mb-20
            max-[640px]:mb-[30px]"
    >
      {children}
    </div>
  );
};

export default HeroRightContainer;
