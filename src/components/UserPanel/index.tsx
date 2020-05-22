import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { PowerSettingsNew, AccountCircleOutlined } from "@material-ui/icons";

import { useAuth } from "../../contexts/authContext";
import useStyles from "./styles";

const MyTextField: React.FC = () => {
  const { setUser, user } = useAuth();
  const classes = useStyles();

  const handleLogOut = () => {
    setUser(null);
    sessionStorage.removeItem("loggedIn");
  };

  return (
    <div className={classes.container}>
      <p className={classes.username}>{user}</p>
      <AccountCircleOutlined fontSize="large" className={classes.userIcon} />
      <Tooltip title="Wyloguj się" aria-label="logout">
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={handleLogOut}
          classes={{ root: classes.logoutButton }}
        >
          <PowerSettingsNew fontSize="large" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MyTextField;
