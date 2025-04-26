import React from "react";
import { motion } from "framer-motion";
import { Education } from "../../types/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./EducationCard";
import { itemVariants } from "../../animations/educationVariants";
import useIsMobile from "../../hooks/useIsMobile";

type EducationTimelineProps = {
  education: Education[];
};

const MotionTimelineItem = motion.create(TimelineItem);
const MotionDiv = motion.div;

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.3 },
  variants: itemVariants,
};

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="mt-14 w-full flex flex-col flex-wrap gap-7.5 justify-center items-center">
        {education.map((item: Education, index: number) => (
          <MotionDiv
            key={item.id}
            custom={index}
            {...motionProps}
            className="pl-4 pr-4"
          >
            <EducationCard education={item} />
          </MotionDiv>
        ))}
      </div>
    );
  };

  return (
    <Timeline>
      {education.map((item: Education, index: number) => (
        <MotionTimelineItem
          key={item.id}
          custom={index}
          {...motionProps}
        >
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <EducationCard education={item} />
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="inherit" />
              {index !== education.length - 1 && (
                <TimelineConnector style={{ background: "#171721e0" }} />
              )}
            </TimelineSeparator>
        </MotionTimelineItem>
      ))}
    </Timeline>
  );
};

export default EducationTimeline;