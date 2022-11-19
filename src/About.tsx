import { Box, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      id="about"
      sx={{
        paddingLeft: "20%",
        paddingRight: "20%",
        bgcolor: "#393E46"
      }}
    >
      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: 65,
          fontWeight: "600",
          color: "#EEEEEE"
        }}
      >
        About
      </Typography>
      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        I am Front End Software Developer.
      </Typography>
      <TabContext value={activeTab}>
        <Box
          sx={{
            borderBottom: 0.5,
            borderColor: "rgba(198,201,216,.75)"
          }}
        >
          <Tabs
            value={activeTab}
            sx={{
              "& .MuiTabs-indicator": {
                bgcolor: "#D65A31"
              }
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              sx={{
                fontSize: 17,
                marginRight: "20%",
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
                fontSize: 17,
                marginRight: "20%",
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
                fontSize: 17,
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
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Web Development
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            React / Node
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Javascript / Typescript
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Material UI
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            MySQL
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Bitbucket / Github
          </Typography>
        </TabPanel>
        <TabPanel sx={{ color: "rgba(198,201,216,.75)" }} value="experience">
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Junior Web Developer - Keyloop, Reading
          </Typography>
          <Typography
            sx={{ marginBottom: 2, color: "rgba(198,201,216,.75)" }}
            variant="subtitle1"
          >
            Jan 2020 - Current
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Software Engineer - Vodafone, Newbury
          </Typography>
          <Typography
            sx={{ color: "rgba(198,201,216,.75)" }}
            variant="subtitle1"
          >
            Dec 2019 - Nov 2020
          </Typography>
        </TabPanel>
        <TabPanel value="education">
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Msc in Computer Science - Univeristy of Birmingham
          </Typography>
          <Typography
            sx={{ marginBottom: 2, color: "rgba(198,201,216,.75)" }}
            variant="subtitle1"
          >
            2018 - 2019 Grade: Merit (67%)
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            Bsc in Nutrition - Oxford Brookes University{" "}
          </Typography>
          <Typography
            sx={{ marginBottom: 2, color: "rgba(198,201,216,.75)" }}
            variant="subtitle1"
          >
            2011 - 2014 Grade: Upper First Class (67%)
          </Typography>
          <Typography sx={{ color: "rgba(198,201,216,.75)" }} variant="h6">
            A Level / GCSEs - Reading College{" "}
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
