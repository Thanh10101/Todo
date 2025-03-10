"use client";
import { createContext, useEffect, useState } from "react";

interface IUser {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  avatar?: string;
}

interface IChildren {
  readonly children: React.ReactNode;
}

export const AppContext = createContext<IUser>({
});

export const AppProvider = ({ children }: IChildren) => {
  const [userData, setUserData] = useState<IUser>({});

  useEffect(() => {
    fetch("https://reqres.in/api/users/1")
    .then((res)=>res.json())
    .then((res)=>{
      setUserData(res.data);
    })
  }, []);
  console.log(userData)
  return (
    <AppContext.Provider value={userData}>
      {children}
    </AppContext.Provider>
  );
};
