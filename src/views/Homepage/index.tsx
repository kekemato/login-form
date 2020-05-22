import React from "react";

import { useAuth } from "../../contexts/authContext";
import LoginForm from "../../components/LoginForm";
import UserPanel from "../../components/UserPanel";

const Homepage: React.FC = () => {
  const { user } = useAuth();

  return user ? <UserPanel /> : <LoginForm />;
};

export default Homepage;
