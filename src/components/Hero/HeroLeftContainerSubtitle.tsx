import React from "react";
import HeroHighlightLanguage from "./HeroHighlightLanguage";
import { Bio } from "../../constants/data";

const HeroLeftContainerSubtitle: React.FC = () => {
  return (
    <div
      className="font-poppins text-[20px] leading-[32px] pt-7 text-center md:text-left sm:mb-[42px] text-[#b1b2b3]  
           sm:text-[20px] sm:leading-[32px] md:text-"
    >
      A highly motivated and passionate developer with experience in{" "}
      {Bio.languages.map((lang, index) => (
        <React.Fragment key={lang}>
          <HeroHighlightLanguage>{lang}</HeroHighlightLanguage>
          {index < Bio.languages.length - 1 ? ", " : ""}
        </React.Fragment>
      ))}
      .
    </div>
  );
};

export default HeroLeftContainerSubtitle;
