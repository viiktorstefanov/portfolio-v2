import React from "react";
import { Link } from "react-scroll";
import { IconType } from "react-icons";

type DrawerMenuItemProps = {
  target: string;
  onClick: () => void;
  icon: IconType;
  label: string;
};

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  target,
  onClick,
  icon: Icon,
  label,
}) => {
  return (
    <Link
      to={target}
      duration={1000}
      smooth={true}
      hashSpy={true}
      className="flex gap-3 justify-start items-center pt-[10px] pr-0 pb-[10px] pl-[27px]"
      onClick={onClick}
    >
      <Icon className="text-[25px] text-primary-app" />
      <span className="font-medium hover:text-primary-app transition duration-200 ease-in-out leading-[0] cursor-pointer">
        {label}
      </span>
    </Link>
  );
};

export default DrawerMenuItem;
