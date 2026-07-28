import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useEffect, useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Home", href: "#home", section: "home" },
  { label: "About", href: "#about", section: "about" },
  { label: "Portfolio", href: "#portfolio", section: "portfolio" },
  { label: "Contact", href: "#contact", section: "contact" }
];

const sectionToNav: Record<string, string> = {
  home: "home",
  about: "about",
  skills: "about",
  experience: "about",
  education: "about",
  portfolio: "portfolio",
  contact: "contact"
};

const NavLink = ({
  label,
  href,
  active,
  onClick,
  variant = "h6"
}: {
  label: string;
  href: string;
  active: boolean;
  onClick?: () => void;
  variant?: "h6" | "button";
}) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!onClick) return;
    // Closing the mobile menu collapses the page height, which races
    // with the browser's native anchor scroll. Close first, then scroll
    // once the collapse animation has finished.
    e.preventDefault();
    onClick();
    const id = href.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <Link
      sx={{
        position: "relative",
        color: active ? "#D65A31" : "#EEEEEE",
        fontWeight: active ? 450 : 350,
        transition: "color 0.2s ease",
        "&:hover": {
          color: "#D65A31"
        }
      }}
      href={href}
      variant={variant}
      underline="hover"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

const Menu = ({ activeSection }: { activeSection: string }) => {
  return (
    <Stack spacing={5} direction="row">
      {navLinks.map((link) => (
        <NavLink
          key={link.section}
          label={link.label}
          href={link.href}
          active={activeSection === link.section}
        />
      ))}
    </Stack>
  );
};

const NavBar = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = Object.keys(sectionToNav);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible[0].target.id;
          setActiveSection(sectionToNav[topMost] ?? "home");
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ position: "sticky", top: 0, zIndex: 1100 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 0.75, md: 1.5 },
          bgcolor: scrolled ? "rgba(34,40,49,0.92)" : "#222831",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.35)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
          paddingRight: { sx: "10%", md: "13%", lg: "12%" }
        }}
      >
        <motion.a
          href="#home"
          aria-label="Go to home"
          style={{ display: "inline-flex", textDecoration: "none" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Typography
            sx={{ color: "#D65A31", fontWeight: 500, fontSize: 28 }}
            variant="h5"
          >
            RP
          </Typography>
        </motion.a>
        {isMobile || isIpad ? (
          <IconButton size="small" onClick={() => setMobileMenu(!mobileMenu)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenu ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenu ? (
                  <CloseIcon sx={{ color: "#EEEEEE", fontSize: 26 }} />
                ) : (
                  <MenuIcon
                    sx={{
                      color: "#EEEEEE",
                      fontSize: 26,
                      "&:hover": { color: "#D65A31" }
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </IconButton>
        ) : (
          <Menu activeSection={activeSection} />
        )}
      </Box>
      <AnimatePresence>
        {mobileMenu && (isMobile || isIpad) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{ bgcolor: "#393E46", py: 2 }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.section}
                  label={link.label}
                  href={link.href}
                  variant="button"
                  active={activeSection === link.section}
                  onClick={() => setMobileMenu(false)}
                />
              ))}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export { NavBar };
