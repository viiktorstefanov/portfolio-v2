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

type ExperienceTimelineProps = {
  experiences: Experience[];
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <div className="w-full max-w-[1000px] mt-2 flex flex-col items-center justify-center gap-3">
      <Timeline>
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
          >
            <TimelineItem>
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
          </motion.div>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;
