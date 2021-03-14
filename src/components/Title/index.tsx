import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
interface Props {
  title: string;
}

const useStyles = makeStyles({
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.2rem",
    textDecoration: "none",
    backgroundImage:
      "linear-gradient(to right, rgb(102, 255, 255), rgb(0, 128, 255))",
    backgroundSize: "100% 2px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
  },
});

export const Title: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.titleWrapper}>
      <h1 className={classes.title}>{title}</h1>
    </Box>
  );
};
