import { Box, Button, Link, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#222831",
        paddingLeft: "20%",
        paddingRight: "20%"
      }}
    >
      <Box sx={{ my: 30 }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: 65,
              fontWeight: "600",
              marginRight: 1,
              color: "#EEEEEE"
            }}
          >
            Hi, I'm
          </Typography>
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: 65,
              fontWeight: "600",
              color: "#D65A31"
            }}
          >
            Rabin
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "serif",
            fontSize: 40,
            fontWeight: "520",
            color: "#EEEEEE"
          }}
        >
          Front-End Developer
        </Typography>
        <a
          href="/RabinCV.pdf"
          download="RabinCV"
          style={{ textDecoration: "none" }}
        >
          <Button
            sx={{
              my: 2,
              bgcolor: "#D65A31",
              borderRadius: 5,
              mx: 10
            }}
            variant="contained"
            size="large"
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Resume
          </Button>
        </a>
      </Box>
      <img
        src="/rabin_pun.jpeg"
        alt="Profile Pic"
        width="400"
        height="400"
        style={{ borderRadius: 200, marginTop: 160 }}
      />
    </Box>
  );
};

export { Home };
