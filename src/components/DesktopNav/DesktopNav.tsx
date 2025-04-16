import React from "react";
import GithubButton from "../GithubButton/GithubButton";
import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import { menuItems } from "../../constants/data";
import MenuItem from "../MenuItem/MenuItem";

const DesktopNav: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center gap-5 px-[6px] text-[18px] max-w-[1200px]">
      <div className="w-[70%] flex items-center justify-start gap-8 px-1.5 text-lg text-white">
        {menuItems.map((item) => (
          <MenuItem key={item.label} target={item.href} label={item.label} />
        ))}
      </div>

      <div className="w-[30%] h-full flex justify-end items-center px-[6px] py-0 gap-5">
        <LinkedInIcon className="text-white" size={30} />
        <GithubButton />
      </div>
    </div>
  );
};

export default DesktopNav;
