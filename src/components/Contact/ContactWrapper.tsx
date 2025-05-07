import React from "react";

type ContactWrapperProps = {
  children: React.ReactNode;
};

const ContactWrapper: React.FC<ContactWrapperProps> = ({ children }) => {
  return (
    <div className="font-poppins relative flex flex-col justify-between items-center w-full max-w-[1350px] py-[10px] md:pb-44 gap-[12px] md:flex-col">
      {children}
    </div>
  );
};

export default ContactWrapper;
