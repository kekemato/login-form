import React from "react";
import { Snackbar as MuiSnackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface SnackbarProps {
  isSnackbarOpen: boolean;
  handleSnackbarClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  isSnackbarOpen,
  handleSnackbarClose,
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleSnackbarClose}
      message={"Wystąpił błąd systemu. Proszę spróbować ponownie później"}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleSnackbarClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Snackbar;
