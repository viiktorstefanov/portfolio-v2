import React from "react";

type SkillsCardListItemImageProps = {
  url: string;
  alt: string;
};

const SkillsCardListItemImage: React.FC<SkillsCardListItemImageProps> = ({
  url,
  alt,
}) => {
  return <img src={url} alt={alt} className="h-[24px] w-[24px]" loading="lazy" />;
};

export default SkillsCardListItemImage;
