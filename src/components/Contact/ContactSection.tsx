import React from "react";

type ContactSectionProps = {
  id: string;
  children: React.ReactNode;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  id,
  children,
}) => {
  return (
    <section
      className="flex flex-col justify-center relative z-[1] items-center pt-20 md:pt-30"
      id={id}
    >
      {children}
    </section>
  );
};

export default ContactSection;
