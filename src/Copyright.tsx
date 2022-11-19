import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Copyright = () => {
  return (
    <Box
      id="contact"
      sx={{
        paddingLeft: "20%",
        paddingRight: "20%",
        bgcolor: "#222831",
        minHeight: 120,
        my: 5,
        textAlign: "center"
      }}
    >
      <Stack
        direction="row"
        spacing={5}
        justifyContent="center"
        marginBottom={1.5}
      >
        <Link
          href={"https://www.linkedin.com/in/rabin-pun-4236a648/"}
          target="_blank"
        >
          <LinkedInIcon
            sx={{
              color: "#D65A31",
              fontSize: 45
            }}
          />
        </Link>
        <Link
          href={"https://github.com/Rabin88?tab=repositories"}
          target="_blank"
        >
          <GitHubIcon
            sx={{
              color: "#D65A31",
              fontSize: 45
            }}
          />
        </Link>
        <Link href={"mailto:rabin.pun88@gmail.com"} target="_blank">
          <EmailIcon
            sx={{
              color: "#D65A31",
              fontSize: 45
            }}
          />
        </Link>
      </Stack>

      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: 17,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        Copyright © 2022 - Rabin Pun. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export { Copyright };
