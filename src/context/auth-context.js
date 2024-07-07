import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const inititalValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken: "",
  name: "",
  selectedTab: "login",
};

const AuthContext = createContext(inititalValue);

const AuthProvider = ({ children }) => {
  const [
    {
      username,
      email,
      password,
      number,
      confirmPassword,
      isAuthModalOpen,
      selectedTab,
      name,
      accessToken,
    },
    authDispatch,
  ] = useReducer(authReducer, inititalValue);

  return (
    <AuthContext.Provider
      value={{
        username,
        number,
        email,
        password,
        confirmPassword,
        isAuthModalOpen,
        selectedTab,
        accessToken,
        name,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
