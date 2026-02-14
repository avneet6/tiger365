import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const demoLogin = () => {
    setUser({
      username: "DEMO123",
      balance: 0.0,
      exp: 0.0,
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, demoLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
