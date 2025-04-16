import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { menuItems } from "../../constants/data";

type MobileMenuProps = {
  onClick: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 absolute top-20 right-0 w-full h-full px-10 pt-3 pb-6 pl-20 bg-black transition-transform duration-700 ease-in-out translate-y-0 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] opacity-100 z-[1000]">
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          target={item.href}
          label={item.label}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default MobileMenu;
