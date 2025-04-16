import React from "react";
import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";

type ResponsiveNavProps = {
  isMobile: boolean;
};

const ResponsiveNav: React.FC<ResponsiveNavProps> = ({ isMobile }) => {
  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default ResponsiveNav;
