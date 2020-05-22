import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  background: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  formPaper: {
    width: "400px",
    maxWidth: "90vw",
    boxSizing: "border-box",
    padding: "30px ",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    marginTop: 0,
  },
  textfield: {
    marginBottom: "20px",
  },
  submitButton: {
    marginTop: "30px",
  },
});

export default useStyles;
