import SchoolIcon from "@mui/icons-material/School";
import { TimelineEntry, TimelineSection } from "./TimelineSection";

const educationEntries: TimelineEntry[] = [
  {
    title: "MSc in Computer Science",
    subtitle: "University of Birmingham",
    date: "2018 - 2019",
    description: "Grade: Merit"
  },
  {
    title: "BSc in Nutrition",
    subtitle: "Oxford Brookes University",
    date: "2011 - 2014",
    description: "Grade: Upper Second Class (2:1)"
  },
  {
    title: "A Level",
    subtitle: "Reading College",
    date: "2008 - 2010"
  }
];

const Education = () => (
  <TimelineSection
    id="education"
    title="Education"
    bgcolor="#222831"
    icon={<SchoolIcon fontSize="small" />}
    entries={educationEntries}
  />
);

export { Education };
