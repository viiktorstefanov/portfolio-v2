import React from 'react';
import { HashLink } from 'react-router-hash-link';

type MenuItemProps = {
    target: string,
    label: string,
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ target, label, onClick }) => {
  return (
    <HashLink className='font-medium hover:text-primary-app transition duration-200 ease-in-out leading-[0]' onClick={onClick} smooth to={target}>{label}</HashLink>
  );
};

export default MenuItem;