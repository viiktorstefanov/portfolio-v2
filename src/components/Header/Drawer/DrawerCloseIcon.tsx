import React from "react";
import { CloseRounded } from "@mui/icons-material";

type DrawerCloseIconProps = {
    onClick: () => void;
};

const DrawerCloseIcon: React.FC<DrawerCloseIconProps> = ({ onClick }) => {
  return (
    <div className="w-full flex items-end justify-end text-end pr-[5%] pt-[10%]">
      <CloseRounded className="cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default DrawerCloseIcon;
