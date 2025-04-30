import React from "react";
import { Link } from "react-scroll";

type MenuItemProps = {
  target: string;
  label: string;
  onClick?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ target, label, onClick }) => {

  const isFirefox = typeof navigator !== "undefined" && /Firefox/.test(navigator.userAgent);
  
  const scrollDuration = isFirefox ? 1000 : 100;

  return (
    <Link
    to={target}
    onClick={onClick}
    smooth={true}
    duration={scrollDuration}
    hashSpy={true}
    spy={true}
    activeClass="active"
    className="font-medium hover:text-primary-app transition duration-200 ease-in-out leading-[0] cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default MenuItem;
