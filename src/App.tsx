import React from "react";
import Router from "./components/Router";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
