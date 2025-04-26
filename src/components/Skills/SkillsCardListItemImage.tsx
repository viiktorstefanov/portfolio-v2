import React from "react";

type SkillsCardListItemImageProps = {
  url: string;
  alt: string;
};

const SkillsCardListItemImage: React.FC<SkillsCardListItemImageProps> = ({
  url,
  alt,
}) => {
  return <img src={url} alt={alt} className="h-[28px] w-[28px]" />;
};

export default SkillsCardListItemImage;
