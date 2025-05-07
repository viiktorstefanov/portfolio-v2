import React from "react";

type ContactTitleProps = {
  label: string;
};

const ContactTitle: React.FC<ContactTitleProps> = ({ label }) => {
  return (
    <h1 className="font-poppins text-4xl text-center font-semibold mb-[50px] text-white dark:text-primary-dark md:mb-[50px] md:text-5xl">
      {label}
    </h1>
  );
};

export default ContactTitle;
