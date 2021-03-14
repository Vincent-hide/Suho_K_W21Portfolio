import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "20px",
    background: "rgba(255, 255, 255, .2)",
    '&:hover': {
      animation: "$backgroundAnimation 7s ease infinite",
      background: 'linear-gradient(90deg, rgba(237,156,42,0.3) 25%, rgba(233,236,122,0.3) 50%, rgba(82,237,202,0.3) 75%, rgba(21,164,245,0.3) 100%)',
      backgroundSize: "400% 400%",
    }
  },
  "@keyframes backgroundAnimation": {
    "0%": {
      backgroundPosition: "0% 25%"
    },
    "25%": {
      backgroundPosition: "50% 75%"
    },
    "50%": {
      backgroundPosition: "100% 75%"
    },
    "75%": {
      backgroundPosition: "50% 25%"
    },
    "100%": {
      backgroundPosition: "0% 25%"
    },
  },
  media: {
    height: 180,
  },
  projectFooter: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  programmingLang: {
    display: "flex",
  },
  gitIcon: {
    color: "grey",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    [theme.breakpoints.down("sm")]: {
      height: "135px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "200px"
    },
    [theme.breakpoints.up("md")]: {
      height: "135px"
    },
  }
}));
