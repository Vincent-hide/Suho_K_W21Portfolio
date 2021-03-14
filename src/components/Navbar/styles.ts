import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  appbarPrimary: {
    background: "#fff",
  },
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export { useStyles };
