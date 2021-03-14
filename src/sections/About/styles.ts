import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: ".4em",
      paddingRight: ".4em",
    },
  },
  me: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  description: {
    padding: "3rem",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
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
  achievementIcon: {
    marginRight: "1rem",
    color: "rgba(0,0,255,.5)",
    animation: "$neonEffect 3s ease infinite alternate",
  },
  "@keyframes neonEffect": {
    "0%": {
      color: "rgba(237,156,42,.8)",
    },
    "25%": {
      color: "rgba(233,236,122,.8)",
    },
    "50%": {
      color: "rgba(82,237,202,.8)",
    },
    "75%": {
      color: "rgba(21,164,245,.8)",
    },
    "100%": {
      color: "rgba(151,20,245,.8)",
    },
  },
  // media: {
  //   height: "100vh",
  //   width: "100%",
  // },
  listItem: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  listTitle: {
    fontSize: "1.3xrem"
  }
}));