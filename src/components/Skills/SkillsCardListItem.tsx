import React from "react";

type SkillsCardListItemProps = {
  children: React.ReactNode;
};

const SkillsCardListItem: React.FC<SkillsCardListItemProps> = ({
  children,
}) => {
  return (
    <div className="w-full text-white text-base font-normal rounded-[12px] py-3 flex flex-col items-center justify-center gap-2 text-center">
      {children}
    </div>
  );
};

export default SkillsCardListItem;
