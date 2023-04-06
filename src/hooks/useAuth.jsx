import * as React from "react";
import { AuthContext } from "../provider/AuthProvider";

function useAuth() {
  return React.useContext(AuthContext);
}

export { useAuth };
