import React from "react";
import DrawerMUI from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { menuItems } from "../../../constants/data";
import MenuItem from "../MenuItem/MenuItem";

type DrawerProps = {
  position: "top" | "right" | "bottom" | "left";
  state: boolean;
  toggleDrawer: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ position, state, toggleDrawer }) => {
  return (
    <DrawerMUI anchor={position} open={state} onClose={toggleDrawer}>
      <Box
        sx={{
          width: 250,
          backgroundColor: "#000",
          height: "100%",
          color: "white",
        }}
        className="font-poppins"
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <div className="flex flex-col gap-3 pt-3 cursor-pointer mt-7 text-primary-app">
          {menuItems.map((item) => (
            <div key={item.id} className="flex gap-3 justify-start items-center pt-[10px] pr-0 pb-[10px] pl-[27px] ">
              <item.icon className="text-[25px]"/>
              <MenuItem
                key={item.label}
                target={item.href}
                label={item.label}
                onClick={toggleDrawer}
              />
            </div>
          ))}
        </div>
      </Box>
    </DrawerMUI>
  );
};

export default Drawer;
