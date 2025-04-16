import React from "react";
import ResponsiveNav from "../ResponsiveNav/ResponsiveNav";
import useIsMobile from "../../hooks/useIsMobile";

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <header className="font-poppins bg-black text-primary-app h-20 flex items-center justify-center text-base sticky top-0 z-10">
      <ResponsiveNav isMobile={isMobile} />
    </header>
  );
};

export default Header;
