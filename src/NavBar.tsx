import { Box, Link, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: 5,
          paddingLeft: "20%",
          paddingRight: "20%",
          bgcolor: "#222831"
        }}
      >
        <Typography sx={{ marginRight: "50%", color: "#D65A31" }} variant="h3">
          RP
        </Typography>
        {/* <img
          src="/logo.png"
          alt="Logo"
          width="200"
          height="200"
          style={{ borderRadius: 200, marginTop: 160 }}
        /> */}

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
      </Box>
    </>
  );
};

export { NavBar };
