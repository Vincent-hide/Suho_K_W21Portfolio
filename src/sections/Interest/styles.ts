import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(3) 
  },
  paper: {
    padding: "3rem",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem"
    },
  },
  listContainer: {
    backgroundColor: theme.palette.background.paper,
  },
}));
