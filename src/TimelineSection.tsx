import {
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from "@mui/lab";
import React from "react";
import { motion } from "framer-motion";
import { sectionHeadingSx } from "./sectionHeading";

const MotionBox = motion.create(Box);

export type TimelineEntry = {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  bullets?: string[];
  current?: boolean;
};

type TimelineSectionProps = {
  id: string;
  title: string;
  bgcolor: string;
  icon: React.ReactNode;
  entries: TimelineEntry[];
};

const TimelineSection = ({
  id,
  title,
  bgcolor,
  icon,
  entries
}: TimelineSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id={id}
      sx={{
        my: 5,
        bgcolor,
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography sx={sectionHeadingSx}>{title}</Typography>
      <Timeline
        sx={{
          px: 0,
          "& .MuiTimelineItem-root:before": {
            flex: 0,
            padding: 0
          }
        }}
      >
        {entries.map((entry, index) => (
          <TimelineItem key={entry.title}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: entry.current ? "#D65A31" : bgcolor,
                  border: "2px solid #D65A31",
                  color: "#EEEEEE",
                  boxShadow: entry.current
                    ? "0 0 0 4px rgba(214,90,49,0.25)"
                    : "none"
                }}
              >
                {icon}
              </TimelineDot>
              {index < entries.length - 1 && (
                <TimelineConnector sx={{ bgcolor: "rgba(198,201,216,.35)" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 2 }}>
              <MotionBox
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Typography
                  sx={{
                    color: "#EEEEEE",
                    fontSize: isMobile ? 15 : 19,
                    fontWeight: 600
                  }}
                >
                  {entry.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#D65A31",
                    fontSize: isMobile ? 13 : 16,
                    fontWeight: 500
                  }}
                >
                  {entry.subtitle}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(198,201,216,.75)",
                    fontSize: 14,
                    mb: entry.description || entry.bullets ? 0.5 : 0
                  }}
                >
                  {entry.date}
                </Typography>
                {entry.description && (
                  <Typography
                    sx={{
                      color: "rgba(198,201,216,.75)",
                      fontSize: 14,
                      maxWidth: 520
                    }}
                  >
                    {entry.description}
                  </Typography>
                )}
                {entry.bullets && (
                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      mt: 0.5,
                      pl: 2.5,
                      maxWidth: 560,
                      listStyleType: "disc"
                    }}
                  >
                    {entry.bullets.map((bullet) => (
                      <Typography
                        key={bullet}
                        component="li"
                        sx={{
                          color: "rgba(198,201,216,.75)",
                          fontSize: 14,
                          mb: 0.5,
                          "&::marker": { color: "#D65A31", fontSize: 14 }
                        }}
                      >
                        {bullet}
                      </Typography>
                    ))}
                  </Box>
                )}
              </MotionBox>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export { TimelineSection };
