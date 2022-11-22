import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
  return (
    <Stack spacing={5} direction="row">
      <Link
        sx={{
          color: "#EEEEEE",
          "&:hover": {
            color: "#D65A31"
          }
        }}
        href="#home"
        variant="h6"
        underline="hover"
      >
        Home
      </Link>
      <Link
        sx={{
          color: "#EEEEEE",
          "&:hover": {
            color: "#D65A31"
          }
        }}
        href="#about"
        variant="h6"
        underline="hover"
      >
        About
      </Link>
      <Link
        sx={{
          color: "#EEEEEE",
          "&:hover": {
            color: "#D65A31"
          }
        }}
        href="#portfolio"
        variant="h6"
        underline="hover"
      >
        Portfolio
      </Link>
      <Link
        sx={{
          color: "#EEEEEE",
          "&:hover": {
            color: "#D65A31"
          }
        }}
        href="#contact"
        variant="h6"
        underline="hover"
      >
        Contact
      </Link>
    </Stack>
  );
};

const NavBar = () => {
  const theme = useTheme();

  // This returns boolean value
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // This returen @media (max-width:599.95px)
  // console.log(theme.breakpoints);

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { sx: 2, md: 5 },
          bgcolor: "#222831",
          paddingLeft: { sx: "10%", md: "13%", lg: "22%" },
          paddingRight: { sx: "10%", md: "13%", lg: "22%" }
        }}
      >
        <Typography
          id="home"
          sx={{ marginRight: "50%", color: "#D65A31", padding: 1.5 }}
          variant="h3"
        >
          RP
        </Typography>
        {isMobile || isIpad ? (
          <IconButton onClick={() => setMobileMenu(!mobileMenu)}>
            <MenuIcon
              fontSize="large"
              sx={{
                color: "#EEEEEE",
                "&:hover": {
                  color: "#D65A31"
                }
              }}
            />
          </IconButton>
        ) : (
          <Menu />
        )}
      </Box>
      {mobileMenu && (isMobile || isIpad) && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ bgcolor: "#393E46" }}
        >
          <Link
            sx={{
              color: "#EEEEEE",
              "&:hover": {
                color: "#D65A31"
              }
            }}
            href="#home"
            variant="button"
            underline="hover"
          >
            Home
          </Link>
          <Link
            sx={{
              color: "#EEEEEE",
              "&:hover": {
                color: "#D65A31"
              }
            }}
            href="#about"
            variant="button"
            underline="hover"
          >
            About
          </Link>
          <Link
            sx={{
              color: "#EEEEEE",
              "&:hover": {
                color: "#D65A31"
              }
            }}
            href="#portfolio"
            variant="button"
            underline="hover"
          >
            Portfolio
          </Link>
          <Link
            sx={{
              color: "#EEEEEE",
              "&:hover": {
                color: "#D65A31"
              }
            }}
            href="#contact"
            variant="button"
            underline="hover"
          >
            Contact
          </Link>
        </Stack>
      )}
    </>
  );
};

export { NavBar };
