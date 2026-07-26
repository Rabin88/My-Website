import {
  Box,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import React, { useState } from "react";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeTab, setActiveTab] = useState("skills");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      id="about"
      sx={{
        bgcolor: "#393E46",
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography
        sx={{
          marginLeft: 1,
          fontFamily: "serif",
          fontSize: isMobile ? 40 : 65,
          fontWeight: "600",
          color: "#EEEEEE"
        }}
      >
        About
      </Typography>
      <Typography
        sx={{
          marginLeft: 1,
          fontFamily: "serif",
          fontSize: isMobile ? 16 : 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        Full Stack Developer with 5+ years' experience building and owning
        customer-facing web portals end-to-end. Currently lead development on a
        business-critical portal at Keyloop, used by automotive dealerships
        across the UK, Europe and Asia. Strong hands-on expertise in React,
        Next.js, TypeScript, Node.js, PostgreSQL and AWS, with production CI/CD
        experience. Re-platformed a legacy ExtJS portal to React + TypeScript,
        cutting technical debt and improving performance. Early adopter of
        AI-augmented development (Claude Code, GitHub Copilot) to accelerate
        delivery. Actively seeking a mid-to-senior Full Stack Developer role in
        the UK, building and owning production systems at scale.
      </Typography>
      <TabContext value={activeTab}>
        <Box
          sx={{
            margin: "auto",
            width: "95%",
            borderBottom: 0.5,
            borderColor: "rgba(198,201,216,.75)"
          }}
        >
          <Tabs
            value={activeTab}
            sx={{
              "& .MuiTabs-indicator": {
                bgcolor: "#D65A31"
              },
              "& .MuiTabs-flexContainer ": {
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "row"
                }
              }
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              sx={{
                fontSize: isMobile ? 13 : 18,
                marginRight: { sx: 0, sm: "12%", md: "20%" },
                color: "#EEEEEE",
                "&.Mui-selected": {
                  color: "#D65A31"
                }
              }}
              label="Technical Skills"
              value="skills"
            />
            <Tab
              sx={{
                fontSize: isMobile ? 13 : 18,
                marginRight: { sx: 0, sm: "12%", md: "20%" },
                color: "#EEEEEE",
                "&.Mui-selected": {
                  color: "#D65A31"
                }
              }}
              label="Experience"
              value="experience"
            />
            <Tab
              sx={{
                fontSize: isMobile ? 13 : 18,
                color: "#EEEEEE",
                "&.Mui-selected": {
                  color: "#D65A31"
                }
              }}
              label="Education"
              value="education"
            />
          </Tabs>
        </Box>
        <TabPanel value="skills">
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Javascript / Typescript/ React.js / Next.js
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Material UI / Formik / React Query / E-Charts
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Node.js / Express / Serverless / AWS / REST API
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Oracle / PostgreSQL
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Github Actions / Jira / Confluence
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Salesforce / Microservices / Vercel
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Scrum / Kanban
          </Typography>
        </TabPanel>
        <TabPanel sx={{ color: "rgba(198,201,216,.75)" }} value="experience">
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Full Stack Developer - Keyloop, Reading
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              color: "rgba(198,201,216,.75)",
              fontSize: 16
            }}
          >
            Jan 2021 - Present
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Graduate Software Engineer - Tata Consultancy Services (TCS)
          </Typography>
          <Typography
            sx={{ color: "rgba(198,201,216,.75)" }}
            variant="subtitle1"
          >
            Dec 2019 - Nov 2020
          </Typography>
        </TabPanel>
        <TabPanel value="education">
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Msc in Computer Science - Univeristy of Birmingham
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              color: "rgba(198,201,216,.75)",
              fontSize: 16
            }}
          >
            2018 - 2019 Grade: Merit
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            Bsc in Nutrition - Oxford Brookes University{" "}
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              color: "rgba(198,201,216,.75)",
              fontSize: 16
            }}
          >
            2011 - 2014 Grade: Upper Second Class (2:1)
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 14 : 19,
              fontWeight: 600
            }}
          >
            A Level - Reading College{" "}
          </Typography>
          <Typography
            sx={{ color: "rgba(198,201,216,.75)" }}
            variant="subtitle1"
          >
            {" "}
            2008 - 2010
          </Typography>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export { About };
