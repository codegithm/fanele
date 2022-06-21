import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [profile, setProfile] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <AppContext.Provider
      value={{
        playerProfile: [profile, setProfile],
        profileShow: [showProfile, setShowProfile],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
