import React from "react";

import { useAuth } from "../../contexts/authContext";
import LoginForm from "../../components/LoginForm";
import UserPanel from "../../components/UserPanel";
import { Fade } from "@material-ui/core";

const Homepage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Fade in={true} timeout={1000} disableStrictModeCompat={true}>
      <div>{user ? <UserPanel /> : <LoginForm />}</div>
    </Fade>
  );
};

export default Homepage;
