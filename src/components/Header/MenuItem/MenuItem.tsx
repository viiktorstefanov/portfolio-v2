import React from "react";
import { Link } from "react-scroll";

type MenuItemProps = {
  target: string;
  label: string;
  onClick?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ target, label, onClick }) => {
  return (
    <Link className='font-medium hover:text-primary-app transition duration-200 ease-in-out leading-[0] cursor-pointer' onClick={onClick} to={target} smooth={true} duration={1000} hashSpy={true}>
      {label}
    </Link>
  );
};

export default MenuItem;
