import React from "react";
import { IconButton } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import { useAuth } from "../../contexts/authContext";

const MyTextField: React.FC = () => {
  const { setUser } = useAuth();

  const handleLogOut = () => {
    setUser(null);
    sessionStorage.removeItem("loggedIn");
  };

  return (
    <div>
      <p>Zalogowany użytkownik: Jan Nowak</p>
      <IconButton aria-label="close" color="inherit" onClick={handleLogOut}>
        <PowerSettingsNewIcon />
      </IconButton>
    </div>
  );
};

export default MyTextField;
