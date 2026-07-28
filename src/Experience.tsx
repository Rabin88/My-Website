import WorkIcon from "@mui/icons-material/Work";
import { TimelineEntry, TimelineSection } from "./TimelineSection";

const experienceEntries: TimelineEntry[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Keyloop, Reading",
    date: "Jan 2021 - Present",
    bullets: [
      "Full-stack ownership of a business-critical customer portal (React, Node.js, PostgreSQL) used by automotive dealerships across the UK, Europe and Asia.",
      "Led the migration from a legacy ExtJS portal to React + TypeScript, later modernising the build tooling from Create React App to Vite — cutting technical debt and improving performance.",
      "Built and maintained serverless AWS microservices (Lambda, S3, Serverless Framework) with secure pre-signed URL file handling.",
      "Built CI/CD pipelines in GitHub Actions with automated testing, SonarQube quality gates and deployment to AWS.",
      "Early adopter of AI-augmented development (Claude Code) to boost productivity and code quality."
    ],
    current: true
  },
  {
    title: "Graduate Software Engineer",
    subtitle: "Tata Consultancy Services (TCS)",
    date: "Dec 2019 - Nov 2020"
  }
];

const Experience = () => (
  <TimelineSection
    id="experience"
    title="Experience"
    bgcolor="#393E46"
    icon={<WorkIcon fontSize="small" />}
    entries={experienceEntries}
  />
);

export { Experience };
