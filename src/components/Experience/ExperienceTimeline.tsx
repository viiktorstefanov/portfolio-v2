import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Experience } from "../../types/constants";
import { motion } from "framer-motion";
import { itemVariants } from "../../animations/experienceVariants";
import ExperienceCard from "./ExperienceCard";
import useIsMobile from "../../hooks/useIsMobile";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

const MotionTimelineItem = motion.create(TimelineItem);
const MotionDiv = motion.div;

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.3 },
  variants: itemVariants,
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="mt-14 w-full flex flex-col flex-wrap gap-7.5 justify-center items-center">
        {experiences.map((experience, index) => (
          <MotionDiv
            key={experience.id}
            custom={index}
            {...motionProps}
            className="pl-4 pr-4"
          >
            <ExperienceCard experience={experience} />
          </MotionDiv>
        ))}
      </div>
    );
  };
  
  return (
    <div className="w-full max-w-[330px] flex flex-col items-center justify-center gap-3 md:max-w-[1000px]">
      <Timeline sx={{ padding: 0}}>
        {experiences.map((experience: Experience, index: number) => (
          <MotionTimelineItem
            key={experience.id}
            custom={index}
            {...motionProps}
          >
            <TimelineItem >
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="inherit" />
                {index !== experiences.length - 1 && (
                  <TimelineConnector style={{ background: "#171721e0" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          </MotionTimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;
