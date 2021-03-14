import React from "react";
import "./App.scss";

import { makeStyles } from "@material-ui/core/styles";
import { Box, CssBaseline } from "@material-ui/core";

import { Navbar } from "./components/Navbar";

// sections
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Project } from "./sections/Project";

import { useWindowPosition } from "./hooks/useWindowPosition";
import { Footer } from "./sections/Footer";
import { Interest } from "./sections/Interest";
// import { ReactHelmet } from "./components/ReactHelmet";

const useStyles = makeStyles((theme) => ({
  body: {
    [theme.breakpoints.down("sm")]: {
      background: "#fff",
    },
  },
}));

export const App: React.FC = () => {
  const checked = useWindowPosition("header");
  const { body } = useStyles();
  return (
    <Box className={body}>
      {/* <ReactHelmet _key="root"/> */}
      <CssBaseline />
      <Navbar checked={checked} />
      <Header />
      <About checked={checked} />
      <Project />
      <Interest />
      <Footer />
    </Box>
  );
};
