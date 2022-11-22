import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      id="home"
      sx={{
        bgcolor: "#222831",
        paddingLeft: { sx: "10%", md: "13%", lg: "22%" },
        paddingRight: { sx: "10%", md: "13%", lg: "22%" },
        textAlign: "center"
      }}
    >
      <Grid
        container
        spacing={{ sx: 2 }}
        sx={{ my: { sx: 10, md: 20 } }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6}>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: isMobile || isIpad ? 45 : 65,
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
                fontSize: isMobile || isIpad ? 45 : 65,
                fontWeight: "600",
                color: "#D65A31"
              }}
            >
              Rabin
            </Typography>
          </Stack>
          <Stack direction="column" textAlign={{ sx: "center", md: "left" }}>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: isMobile || isIpad ? 35 : 40,
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
                size={isMobile ? "medium" : "large"}
                startIcon={<FileDownloadOutlinedIcon />}
              >
                Resume
              </Button>
            </a>
          </Stack>
        </Grid>
        {isMobile || isIpad ? (
          <Grid item xs={12} sm={12} md={6} textAlign="center" sx={{ my: 3 }}>
            <img
              src="/rabin_pun.jpeg"
              alt="Profile Pic"
              width="300"
              height="300"
              style={{
                borderRadius: "50%"
              }}
            />
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={6} textAlign="right">
            <img
              src="/rabin_pun.jpeg"
              alt="Profile Pic"
              width="400"
              height="400"
              style={{
                borderRadius: "50%"
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export { Home };
