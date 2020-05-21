import React, { useEffect, useState, createContext, useContext } from "react";

interface InitContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext({} as InitContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    setUser(isLoggedIn ? "Jan Nowak" : null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
