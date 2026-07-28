import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const MotionStack = motion.create(Stack);
const MotionTypography = motion.create(Typography);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rabin-pun-4236a648/",
    icon: LinkedInIcon
  },
  {
    label: "GitHub",
    href: "https://github.com/Rabin88?tab=repositories",
    icon: GitHubIcon
  },
  { label: "Email", href: "mailto:rabin.pun88@gmail.com", icon: EmailIcon }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      id="home"
      sx={{
        bgcolor: "#222831",
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" },
        textAlign: "center"
      }}
    >
      <Grid
        container
        spacing={{ sx: 2 }}
        sx={{ my: { sx: 10, md: 13 } }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6}>
          <MotionStack
            direction={{ xs: "column", md: "row" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <MotionTypography
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                fontFamily: "serif",
                fontSize: { xs: 34, sm: 42, md: 48, lg: 54, xl: 62 },
                fontWeight: "600",
                marginRight: 1,
                color: "#EEEEEE"
              }}
            >
              Hi, I'm
            </MotionTypography>
            <MotionTypography
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                fontFamily: "serif",
                fontSize: { xs: 34, sm: 42, md: 48, lg: 54, xl: 62 },
                fontWeight: "600",
                color: "#D65A31"
              }}
            >
              Rabin
            </MotionTypography>
          </MotionStack>
          <MotionStack
            direction="column"
            textAlign={{ xs: "center", md: "left" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <MotionTypography
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                fontFamily: "serif",
                fontSize: { xs: 26, sm: 30, md: 34, lg: 38, xl: 42 },
                fontWeight: "520",
                color: "#EEEEEE"
              }}
            >
              Full Stack Developer
            </MotionTypography>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a
                href="/Rabin CV.pdf"
                download="Rabin CV"
                style={{ textDecoration: "none" }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  sx={{
                    my: 2,
                    bgcolor: "#D65A31",
                    borderRadius: 5,
                    "&:hover": { bgcolor: "#D65A31" }
                  }}
                  variant="contained"
                  size={isMobile ? "medium" : "large"}
                  startIcon={<FileDownloadOutlinedIcon />}
                >
                  Resume
                </Button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Stack
                direction="row"
                spacing={3}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ mt: 1 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ display: "inline-flex" }}
                  >
                    <social.icon sx={{ color: "#D65A31", fontSize: 32 }} />
                  </motion.a>
                ))}
              </Stack>
            </motion.div>
          </MotionStack>
        </Grid>
        {isMobile || isIpad ? (
          <Grid item xs={12} sm={12} md={6} textAlign="center" sx={{ my: 3 }}>
            <Box sx={{ display: "inline-block" }}>
              <img
                src="/profile_pic.jpg"
                alt="Rabin Pun"
                width="300"
                height="300"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  boxShadow: "0 0 0 6px rgba(214,90,49,0.25)"
                }}
              />
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={6} textAlign="right">
            <Box sx={{ display: "inline-block" }}>
              <img
                src="/profile_pic.jpg"
                alt="Rabin Pun"
                width="350"
                height="350"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  boxShadow: "0 0 0 3px rgba(214,90,49,0.25)"
                }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          style={{ display: "inline-flex", textDecoration: "none" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <KeyboardArrowDownIcon
            sx={{ color: "rgba(238,238,238,0.5)", fontSize: 40 }}
          />
        </motion.a>
      </Box>
    </Box>
  );
};

export { Home };
