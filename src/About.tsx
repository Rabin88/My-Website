import { Box, Typography } from "@mui/material";
import { sectionHeadingSx } from "./sectionHeading";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        bgcolor: "#393E46",
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography sx={sectionHeadingSx}>About</Typography>
      <Typography
        sx={{
          marginLeft: 1,
          fontFamily: "serif",
          fontSize: { xs: 16, sm: 17, md: 18, lg: 19 },
          fontWeight: 300,
          lineHeight: 1.7,
          color: "rgba(198,201,216,.75)",
          paddingBottom: 4
        }}
      >
        Full Stack Developer with 5+ years' experience building and owning
        customer-facing web portals end-to-end. Currently lead development of a
        business-critical portal at Keyloop, serving the automotive retail
        industry across the UK, Europe and Asia. Skilled in React, Next.js,
        TypeScript, Node.js, PostgreSQL and AWS, with a strong track record
        modernising legacy systems and driving CI/CD delivery. Actively seeking
        a mid-to-senior Full Stack role to ship user-focused software at scale.
      </Typography>
    </Box>
  );
};

export { About };
