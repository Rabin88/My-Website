// Components
import { Box } from "@mui/material";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
// import { About } from "./About";
// import { Portfolio } from "./Portfolio";
// import { Contact } from "./Contact";
// import { Copyright } from "./Copyright";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Home />
      {/* <About />
      <Portfolio />
      <Contact />
      <Copyright /> */}
    </Box>
  );
};

export { App };
