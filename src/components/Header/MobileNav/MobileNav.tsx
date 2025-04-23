import React, { useState } from "react";
import SandwichIcon from "../SandwichIcon/SandwichIcon";
import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import GithubIcon from "../GithubIcon/GithubIcon";
import Drawer from "../Drawer/Drawer";

const MobileNav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpenMenu(open);
  };

  return (
    <div className="flex justify-between items-center h-[60px] z-[1] w-full px-6 max-w-[1200px]">
      <div className="flex justify-center items-center gap-5">
        <GithubIcon />
        <LinkedInIcon />
      </div>
      <SandwichIcon onClick={toggleDrawer(true)} />

      <Drawer position="right" state={openMenu} toggleDrawer={toggleDrawer(false)}/>
    </div>
  );
};

export default MobileNav;
