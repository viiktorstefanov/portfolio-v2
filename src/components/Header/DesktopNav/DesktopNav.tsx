import React from "react";

import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";

import MenuItem from "../MenuItem/MenuItem";
import { menuItems } from "../../../constants/data";
import GithubButton from "../GithubButton/GithubButton";

const DesktopNav: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center gap-5 px-[6px] text-lg max-w-[1200px]">
      <div className="w-[70%] flex items-center justify-start gap-8 px-1.5 text-xl text-white">
        {menuItems.map((item) => (
          <MenuItem key={item.label} target={item.href} label={item.label} />
        ))}
      </div>

      <div className="w-[30%] h-full flex justify-end items-center px-[6px] py-0 gap-5">
        <LinkedInIcon className="text-white hover:text-primary-app" size={30} />
        <GithubButton />
      </div>
    </div>
  );
};

export default DesktopNav;
