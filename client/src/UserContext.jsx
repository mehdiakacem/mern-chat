import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get("/profile", { withCredentials: true }).then((response) => {
      setId(response.data.userId);
      setUsername(response.data.username);
    });
  });

  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
