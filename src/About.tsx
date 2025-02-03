import {
  Box,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { Padding } from "@mui/icons-material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
          fontSize: isMobile ? 18 : 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        Technically competent and result-oriented with over 4 years of
        experience in building scalable web applications using React and Node.
        Migrated legacy web applications into modern tech stacks that reduced
        the technical debt. Always keen to learn modern tech frameworks and
        problem solving techniques.
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
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Javascript / Typescript/ React.js / Next.js
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Material UI / Formik / React Query / React E-Charts
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Node.js / Express / Serverless / AWS Lambda / RESTful API
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Oracle / PostgreSQL
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Github Actions / Bitbucket / Jira / Confluence
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Salesforce / Microservices / Vercel
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
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
              fontSize: isMobile ? 16 : 19,
              fontWeight: 600
            }}
          >
            Full Stack Web Developer - Keyloop, Reading
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
              fontSize: isMobile ? 16 : 19,
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
              fontSize: isMobile ? 16 : 19,
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
            2018 - 2019 Grade: Merit (67%)
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
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
            2011 - 2014 Grade: Upper Second Class (67%)
          </Typography>
          <Typography
            sx={{
              color: "#EEEEEE",
              fontSize: isMobile ? 16 : 19,
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
