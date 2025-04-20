import React from "react";
import { Bio } from "../../constants/data";

const HeroImage: React.FC = () => {
  return (
    <img
      className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-full border-4 border-white
            sm:max-w-[400px] sm:max-h-[400px]
            max-[640px]:max-w-[280px] max-[640px]:max-h-[280px]"
      src={Bio.photo}
      alt={Bio.name}
      loading="lazy"
    />
  );
};

export default HeroImage;
