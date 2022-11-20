import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      id="portfolio"
      sx={{
        my: 5,
        bgcolor: "#222831",
        paddingLeft: { sx: "10%", md: "20%" },
        paddingRight: { sx: "10%", md: "20%" }
      }}
    >
      <Typography
        sx={{
          marginLeft: 1,
          fontFamily: "serif",
          fontSize: isMobile ? 40 : 65,
          fontWeight: "600",
          color: "#EEEEEE"
        }}
      >
        Portfolio
      </Typography>
      <Typography
        sx={{
          marginLeft: 1,
          fontFamily: "serif",
          fontSize: 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        This is a portfolio section.
      </Typography>
      <Box>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                minHeight: isMobile ? 300 : 400,
                textAlign: "center",
                bgcolor: "#393E46",
                color: "#EEEEEE"
              }}
            >
              <CardContent sx={{ marginTop: "20%" }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Personal Website
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "rgba(198,201,216,.75)" }}
                >
                  My first personal website built using HTML and CSS.
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ my: 4, bgcolor: "#D65A31", color: "#EEEEEE" }}
                >
                  Preview
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                minHeight: isMobile ? 300 : 400,
                textAlign: "center",
                bgcolor: "#393E46",
                color: "#EEEEEE"
              }}
            >
              <CardContent sx={{ marginTop: "20%" }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Covid Tracker App
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "rgba(198,201,216,.75)" }}
                >
                  My first web app developemnt during covid period using public
                  API.
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ my: 4, bgcolor: "#D65A31", color: "#EEEEEE" }}
                >
                  Preview
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                minHeight: isMobile ? 300 : 400,
                textAlign: "center",
                bgcolor: "#393E46",
                color: "#EEEEEE"
              }}
            >
              <CardContent sx={{ marginTop: "20%" }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Ecommerce App
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "rgba(198,201,216,.75)" }}
                >
                  Comming soon ...
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ my: 4, bgcolor: "#D65A31", color: "#EEEEEE" }}
                >
                  Preview
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { Portfolio };
