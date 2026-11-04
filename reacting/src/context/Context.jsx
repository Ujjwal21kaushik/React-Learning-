import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function Context(props) {
  // console.log(props.children);
  const data = [
    {
      id: 0,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
    },
    {
      id: 1,
      email: "morrison@gmail.com",
      username: "morish",
      password: "83r5^_",
    },
  ];
  

  const [user, setUser] = useState(data);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
