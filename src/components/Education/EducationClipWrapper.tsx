import React from "react";

type EducationClipWrapperProps = {
  children: React.ReactNode;
};

const EducationClipWrapper: React.FC<EducationClipWrapperProps> = ({
  children,
}) => {
  return <div className="wrapper-education">{children}</div>;
};

export default EducationClipWrapper;
