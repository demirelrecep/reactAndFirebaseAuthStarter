import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";

export const PetContext = createContext();

const PetProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const values = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>
    <div className="full-page-bg">
       <h1>Loading</h1>
    </div>
    </>;
  }

  return <PetContext.Provider value={values}>{children}</PetContext.Provider>;
};

export default PetProvider;
