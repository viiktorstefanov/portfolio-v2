import React from "react";
import DrawerMUI from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { menuItems } from "../../../constants/data";
import DrawerMenuItem from "./DrawerMenuItem";
import DrawerCloseIcon from "./DrawerCloseIcon";

type DrawerProps = {
  position: "top" | "right" | "bottom" | "left";
  state: boolean;
  toggleDrawer: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ position, state, toggleDrawer }) => {
  return (
    <DrawerMUI anchor={position} open={state} onClose={toggleDrawer}>
      <Box
        className="font-poppins w-[250px] bg-black h-full text-white"
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <div className="flex flex-col gap-3 cursor-pointer">
          <DrawerCloseIcon onClick={toggleDrawer} />
          {menuItems.map((item) => (
            <DrawerMenuItem
              key={item.id}
              target={item.href}
              onClick={toggleDrawer}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </Box>
    </DrawerMUI>
  );
};

export default Drawer;
