import React, { useState } from "react";
import SandwichIcon from "../SandwichIcon/SandwichIcon";

import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import MobileMenu from "../MobileMenu/MobileMenu";
import GithubIcon from "../GithubIcon/GithubIcon";

const MobileNav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between items-center h-[60px] z-[1] w-full px-6 max-w-[1200px]">
      <div className="flex justify-center items-center gap-5">
        <GithubIcon />
        <LinkedInIcon />
      </div>
      <SandwichIcon onClick={onClick} />
      {openMenu && <MobileMenu onClick={onClick} />}
    </div>
  );
};

export default MobileNav;
