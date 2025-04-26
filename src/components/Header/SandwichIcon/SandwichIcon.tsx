import React from 'react';
import { FaBars } from 'react-icons/fa';

type SandwichIconProps = {
    onClick: () => void;
}

const SandwichIcon: React.FC<SandwichIconProps> = ({ onClick }) => {
  return (
    <div
    className="block absolute top-0 right-0 transform -translate-x-full translate-y-3/5 cursor-pointer text-inherit text-[1.5rem]"
    onClick={onClick}
  >
      <FaBars className='text-inherit'/>
    </div>
  );
};

export default SandwichIcon;