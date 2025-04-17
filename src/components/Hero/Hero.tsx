import React from 'react';
import { menuItems } from '../../constants/data';

const Hero: React.FC = () => {
  return (
    <div id={menuItems[0].href}>
      <div className='flex justify-center relative z-[1] px-[30px] py-[80px] md:px-[30px] md:py-[80px] max-md:px-16 max-md:py-[66px] max-[640px]:px-16 max-[640px]:py-[32px]'>

      </div>
    </div>
  );
};

export default Hero;