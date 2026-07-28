import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { sectionHeadingSx } from "./sectionHeading";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMui,
  SiFormik,
  SiReactquery,
  SiApacheecharts,
  SiNodedotjs,
  SiExpress,
  SiServerless,
  SiPostgresql,
  SiGithubactions,
  SiJira,
  SiConfluence,
  SiVercel,
  SiTailwindcss,
  SiVite,
  SiTestinglibrary,
  SiMysql,
  SiGithub,
  SiGithubcopilot,
  SiClaude,
  SiKnexdotjs
} from "react-icons/si";
import { FaAws, FaSalesforce, FaDatabase } from "react-icons/fa";
import { MdApi, MdHub, MdGroups, MdViewColumn } from "react-icons/md";
import { TbInfinity } from "react-icons/tb";
import { RiMicrosoftCopilotFill, RiOpenaiFill } from "react-icons/ri";

const MotionCard = motion.create(Card);

type Skill = { name: string; icon: IconType };
type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <CodeIcon />,
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Material UI", icon: SiMui },
      { name: "Formik", icon: SiFormik },
      { name: "React Query", icon: SiReactquery },
      { name: "E-Charts", icon: SiApacheecharts },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "React Testing Library", icon: SiTestinglibrary }
    ]
  },
  {
    title: "Backend",
    icon: <DnsIcon />,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Serverless", icon: SiServerless },
      { name: "AWS", icon: FaAws },
      { name: "REST API", icon: MdApi }
    ]
  },
  {
    title: "Database",
    icon: <StorageIcon />,
    skills: [
      { name: "Oracle", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Knex.js", icon: SiKnexdotjs }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <BuildIcon />,
    skills: [
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "GitHub", icon: SiGithub },
      { name: "Jira", icon: SiJira },
      { name: "Confluence", icon: SiConfluence },
      { name: "Vercel", icon: SiVercel },
      { name: "Salesforce", icon: FaSalesforce },
      { name: "Microservices", icon: MdHub }
    ]
  },
  {
    title: "Methodology",
    icon: <GroupsIcon />,
    skills: [
      { name: "Scrum", icon: MdGroups },
      { name: "Kanban", icon: MdViewColumn },
      { name: "Agile", icon: TbInfinity }
    ]
  },
  {
    title: "AI Development Tools ",
    icon: <AutoAwesomeIcon />,
    skills: [
      { name: "Claude Code", icon: SiClaude },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Microsoft 365 Copilot", icon: RiMicrosoftCopilotFill },
      { name: "OpenAI API", icon: RiOpenaiFill }
    ]
  }
];

const TechnicalSkills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="skills"
      sx={{
        my: 5,
        bgcolor: "#222831",
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography sx={sectionHeadingSx}>Core Skills</Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 1 }}>
        {skillCategories.map((category, catIndex) => (
          <Grid item xs={12} sm={6} md={4} key={category.title}>
            <MotionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -6, borderColor: "#D65A31" }}
              sx={{
                height: "100%",
                bgcolor: "#393E46",
                border: "1.5px solid rgba(214,90,49,0.5)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: "#D65A31",
                      fontSize: 28
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    sx={{
                      color: "#EEEEEE",
                      fontWeight: 700,
                      fontSize: isMobile ? 17 : 20
                    }}
                  >
                    {category.title}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1
                  }}
                >
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <Chip
                        key={skill.name}
                        icon={<Icon size={15} />}
                        label={skill.name}
                        size="small"
                        sx={{
                          bgcolor: "rgba(238,238,238,0.06)",
                          color: "#EEEEEE",
                          border: "1px solid rgba(198,201,216,0.25)",
                          fontWeight: 500,
                          transition:
                            "background-color 0.2s ease, transform 0.2s ease",
                          "& .MuiChip-icon": { color: "#D65A31" },
                          "&:hover": {
                            bgcolor: "#D65A31",
                            transform: "translateY(-2px)",
                            "& .MuiChip-icon": { color: "#EEEEEE" }
                          }
                        }}
                      />
                    );
                  })}
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { TechnicalSkills };
