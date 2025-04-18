import React from "react";
import HeroHighlightLanguage from "./HeroHighlightLanguage";
import { languages } from "../../constants/data";

const HeroLeftContainerSubtitle: React.FC = () => {
  return (
    <div
      className="font-poppins text-[20px] leading-[32px] mb-[42px] text-[#b1b2b3]  
           sm:text-[20px] sm:leading-[32px]"
    >
      A highly motivated and passionate developer with experience in{" "}
      {languages.map((lang, index) => (
        <React.Fragment key={lang}>
          <HeroHighlightLanguage>{lang}</HeroHighlightLanguage>
          {index < languages.length - 1 ? ", " : ""}
        </React.Fragment>
      ))}
      .
    </div>
  );
};

export default HeroLeftContainerSubtitle;
