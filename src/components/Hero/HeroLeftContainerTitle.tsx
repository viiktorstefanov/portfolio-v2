import React from "react";
import { Bio } from "../../constants/data";

const HeroLeftContainerTitle: React.FC = () => {
  return (
    <h2
      className="font-poppins font-bold text-[50px] leading-[68px] text-white  
            max-[960px]:text-center 
            max-[640px]:text-[40px] max-[640px]:leading-[48px] max-[640px]:mb-2"
    >
      {" "}
      Hi, I am <br /> {Bio.name}
    </h2>
  );
};

export default HeroLeftContainerTitle;
