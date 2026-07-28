import {
  Box,
  Button,
  Card,
  Chip,
  Stack,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SiReact, SiJavascript, SiNetlify } from "react-icons/si";
import { sectionHeadingSx } from "./sectionHeading";

const MotionCard = motion.create(Card);

const techStack = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Netlify", icon: SiNetlify }
];

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="portfolio"
      sx={{
        my: 5,
        bgcolor: "#393E46",
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography sx={sectionHeadingSx}>Portfolio</Typography>
      <Typography
        sx={{
          marginLeft: 1,
          marginBottom: 4,
          fontFamily: "serif",
          fontSize: isMobile ? 16 : 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        A selection of projects I've built.
      </Typography>

      <MotionCard
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.35)" }}
        sx={{
          bgcolor: "#222831",
          color: "#EEEEEE",
          overflow: "hidden",
          maxWidth: 900,
          mx: "auto"
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Box
            sx={{
              flex: { sm: "0 0 40%" },
              minHeight: { xs: 160, sm: "auto" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(214,90,49,0.35), rgba(34,40,49,0.6))"
            }}
          >
            <StorefrontIcon
              sx={{ fontSize: { xs: 64, sm: 88 }, color: "#D65A31" }}
            />
          </Box>
          <Box sx={{ p: { xs: 3, sm: 4 }, flex: 1 }}>
            <Typography sx={{ fontSize: isMobile ? 20 : 24, fontWeight: 700 }}>
              Shoezone
            </Typography>
            <Typography
              sx={{ color: "rgba(198,201,216,.75)", fontSize: 15, my: 1 }}
            >
              An ecommerce web app for browsing and purchasing shoes, built
              end-to-end with React.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 2 }}>
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <Chip
                    key={tech.name}
                    icon={<Icon size={15} />}
                    label={tech.name}
                    size="small"
                    sx={{
                      bgcolor: "rgba(238,238,238,0.06)",
                      color: "#EEEEEE",
                      border: "1px solid rgba(198,201,216,0.25)",
                      "& .MuiChip-icon": { color: "#D65A31" }
                    }}
                  />
                );
              })}
            </Box>
            <Button
              component={motion.a}
              href="https://shoezonehub.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              variant="contained"
              endIcon={<OpenInNewIcon />}
              sx={{
                bgcolor: "#D65A31",
                color: "#EEEEEE",
                borderRadius: 5,
                "&:hover": { bgcolor: "#D65A31" }
              }}
            >
              View Live Site
            </Button>
          </Box>
        </Stack>
      </MotionCard>

      <Typography
        sx={{
          textAlign: "center",
          mt: 4,
          p: 2,
          color: "rgba(198,201,216,.5)",
          fontSize: 15
        }}
      >
        More projects in the works — check back soon.
      </Typography>
    </Box>
  );
};

export { Portfolio };
