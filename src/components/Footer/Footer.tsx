import React from "react";
import { Link } from "react-router-dom";
import { Bio } from "../../constants/data";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 flex justify-center font-poppins">
      <div className="w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-4 text-black">
        <p className="mt-6 text-base text-black text-center">
        &copy; {currentYear} <Link to={Bio.linkedin} target="_blank" className="text-black no-underline cursor-pointer hover:underline">{Bio.name}</Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
