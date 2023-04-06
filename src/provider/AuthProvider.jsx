import * as React from "react";
import { login, register } from "../services/UserServices";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const signin = async (email, password) => {
    console.log("AuthProvider: signin", email, password)
    return await login(email, password);
  };

  const logout = async () => {
    return;
  };

  const createUser = async (name, email, password) => {
    return await register({name, email, password});
  };

  let value = { user, signin, createUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider
