import { Box, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Box
      id="site-footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: { xs: 0.75, md: 1.5 },
        bgcolor: "#393E46",
        my: 3,
        paddingLeft: { xs: "10%", md: "13%", lg: "12%" },
        paddingRight: { xs: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: { xs: 11, md: 13 },
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        Copyright © {date} - Rabin Pun.
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            component={motion.a}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <social.icon sx={{ color: "#D65A31", fontSize: 20 }} />
          </Link>
        ))}

        <motion.a
          href="#home"
          aria-label="Back to top"
          style={{ display: "inline-flex", textDecoration: "none" }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <KeyboardArrowUpIcon
            sx={{
              color: "rgba(238,238,238,0.5)",
              fontSize: 20,
              "&:hover": { color: "#D65A31" }
            }}
          />
        </motion.a>
      </Stack>
    </Box>
  );
};

export { Footer };
