import React from "react";
import { Bio } from "../../constants/data";
import Typewriter from "typewriter-effect";
import HeroSpan from "./HeroSpan";
import useIsMobile from "../../hooks/useIsMobile";

const HeroTextLoop: React.FC = () => {
  const isMobile = useIsMobile();

  if(isMobile) return null;
  
  return (
    <div
      className="font-poppins font-semibold text-[32px] flex gap-3 text-white leading-[68px] 
           max-[960px]:text-center 
           max-[640px]:text-[18px] max-[640px]:leading-[48px] max-[640px]:mb-4 md:ml-2"
    >
      I am a
      <HeroSpan>
        <Typewriter
          options={{
            strings: Bio.roles,
            autoStart: true,
            loop: true,
          }}
        />
      </HeroSpan>
    </div>
  );
};

export default HeroTextLoop;
