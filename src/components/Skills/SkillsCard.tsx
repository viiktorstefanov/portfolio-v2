import React from "react";
import { motion } from "framer-motion";
import { SkillCategory } from "../../types/constants";
import Title from "./SkillsCardTitle";
import SkillsList from "./SkillsCardList";
import SkillsListItem from "./SkillsCardListItem";
import SkillsListItemImage from "./SkillsCardListItemImage";

type SkillsCardProps = {
  index: number;
  skill: SkillCategory;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ index, skill }) => {
  return (
    <motion.div
      className="font-poppins w-full max-w-[500px] bg-[#171721e0] shadow-[0px_4px_24px_rgba(23,92,230,0.15)] rounded-2xl px-9 py-[18px]
  md:max-w-[500px] md:px-9 md:py-[18px]
  sm:max-w-[330px] sm:px-9 sm:py-[10px]"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{
        duration: 1.1,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <Title title={skill.title} />
      <SkillsList>
        {skill.skills.map((item, index) => (
          <SkillsListItem key={index}>
            <SkillsListItemImage url={item.image} alt={item.name} />
            {item.name}
          </SkillsListItem>
        ))}
      </SkillsList>
    </motion.div>
  );
};

export default SkillsCard;
