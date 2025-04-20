import React from "react";

const ProjectModalContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className="font-poppins w-full h-full absolute top-0 left-0 bg-black/65 flex items-start justify-center overflow-y-scroll transition-all duration-500 ease-in-out"
      {...rest}
    >
      {children}
    </div>
  );
});

export default ProjectModalContainer;
