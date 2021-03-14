import React, { useState, useEffect } from "react";
import { makeStyles, IconButton, Collapse, Box, Typography } from "@material-ui/core";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import Typed from "react-typed";
// import { Navbar } from "../../components/Navbar";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  icon: {
    color: "#000",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#000",
    fontSize: "4.5rem",
  },
  iconDown: {
    color: "#000",
    fontSize: "4rem",
  },
  names: {
    fontSize: "4rem",
    textDecoration: "none",
    backgroundImage:
      "linear-gradient(to right, rgb(102, 255, 255), rgb(0, 128, 255))",
    backgroundSize: "100% 2px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  // for collapse
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      {/* <Navbar /> */}

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <div>
            <Typed
              className={classes.names}
              strings={[" Suho Kang", "Vincent", "Hide"]}
              loop
              backSpeed={80}
              typeSpeed={80}
            />
          </div>
          <Box width={500}>
            <Typography variant="h6">Philosophy</Typography>
            <Typography paragraph>
              Enjoying a job with excitement is a dream job for me. Programming
              is the only time and I forget everything else and focus on one
              thing with a passion. It is very hard to come up with the best
              solution but when I think about what you could gain by completing
              it, it is absolutely worth it. This is the reason why I would love
              to work as a software engineer.{" "}
            </Typography>
          </Box>

          <Scroll to={"about"} smooth={true}>
            <IconButton>
              <ArrowDropDownSharpIcon className={classes.iconDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};
