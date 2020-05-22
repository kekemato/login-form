import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    padding: "10px 15px",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.14)",
  },
  username: {
    marginRight: "10px",
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "cursive",
  },
  userIcon: {
    marginRight: "10px",
  },
  logoutButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export default useStyles;
