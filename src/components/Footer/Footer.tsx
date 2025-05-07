import React from "react";
import { Bio } from "../../constants/data";
import SocialIcons from "./SocialIcons";
import Copyright from "./Copyright";

const Footer: React.FC = () => {
  return (
    <footer className="clip-footer-polygon w-full py-8 flex justify-center font-poppins">
      <div className="w-full max-w-[1200px] flex flex-col gap-5 items-center p-4 text-black">
        <SocialIcons bio={Bio} />
        <Copyright bio={Bio} />
      </div>
    </footer>
  );
};

export default Footer;
