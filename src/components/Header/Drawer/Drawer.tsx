import React from "react";
import DrawerMUI from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { menuItems } from "../../../constants/data";
import MenuItem from "../MenuItem/MenuItem";
import { CloseRounded } from "@mui/icons-material";
import { Link } from "react-scroll";

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
        <div className="flex flex-col gap-3 cursor-pointer">
          <div className="w-full flex items-end justify-end text-end pr-[5%] pt-[10%]">
            <CloseRounded className="cursor-pointer" onClick={toggleDrawer} />
          </div>
          {menuItems.map((item) => (
            <Link
              to={item.href}
              key={item.id}
              className="flex gap-3 justify-start items-center pt-[10px] pr-0 pb-[10px] pl-[27px] "
            >
              <item.icon className="text-[25px] text-primary-app" />
              <MenuItem
                key={item.id}
                target={item.href}
                label={item.label}
                onClick={toggleDrawer}
              />
            </Link>
          ))}
        </div>
      </Box>
    </DrawerMUI>
  );
};

export default Drawer;
