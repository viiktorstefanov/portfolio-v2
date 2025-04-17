import React from "react";

type EducationContainerProps = {
  children: React.ReactNode;
};

const EducationContainer: React.FC<EducationContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] py-[40px] gap-[12px] sm:flex-col">
      {children}
    </div>
  );
};

export default EducationContainer;
