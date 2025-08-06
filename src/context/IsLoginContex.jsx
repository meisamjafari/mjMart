import React, { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const IsLoginContex = createContext();

export default function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token)
  }, []);

  return (
    <IsLoginContex.Provider value={{ isLogin,setIsLogin }}>
      {children}
    </IsLoginContex.Provider>
  );
}
