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

type EducationTimelineProps = {
  education: Education[];
};

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  return (
    <Timeline>
      {education.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants}
        >
          <TimelineItem>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <EducationCard education={item} />
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="inherit" />
              {index !== education.length - 1 && (
                <TimelineConnector style={{ background: "#171721e0" }} />
              )}
            </TimelineSeparator>
          </TimelineItem>
        </motion.div>
      ))}
    </Timeline>
  );
};

export default EducationTimeline;
