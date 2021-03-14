import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#000",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1.4rem 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  personal: {
    marginLeft: "1rem",
    fontWeight: "bold"
  }
}));
