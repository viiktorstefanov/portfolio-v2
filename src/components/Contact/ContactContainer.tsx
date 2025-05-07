import React from "react";

type ContactContainerProps = {
  children: React.ReactNode;
};

const ContactContainer: React.FC<ContactContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] py-[40px] gap-[12px] sm:flex-col">
      {children}
    </div>
  );
};

export default ContactContainer;
