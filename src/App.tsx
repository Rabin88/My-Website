// Components
import { Box } from "@mui/material";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#D65A31"
      }
    }
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Box>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

export { App };
