"use client";

import { createContext, useContext } from "react";

type AppContextProps = {
  state: {
    isMobile?: boolean;
    isDesktop?: boolean;
  };
};

export const AppContext = createContext<AppContextProps>({
  state: {
    isMobile: false,
  },
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const state = {
    isMobile: window.innerWidth < 768,
    isDesktop: window.innerWidth >= 768,
  };

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};
