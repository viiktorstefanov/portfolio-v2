import React from "react";

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="body">{children}</main>;
};

export default Main;
