import React from "react";

type SkillsCardListItemProps = {
  children: React.ReactNode;
};

const SkillsCardListItem: React.FC<SkillsCardListItemProps> = ({
  children,
}) => {
  return (
    <div
      className="text-white text-[16px] font-normal rounded-[12px] px-4 py-3 flex items-center justify-center gap-2 
md:text-[16px] md:px-4 md:py-3 
max-[500px]:text-[14px] max-[500px]:px-3 max-[500px]:py-[6px]"
    >
      {children}
    </div>
  );
};

export default SkillsCardListItem;
