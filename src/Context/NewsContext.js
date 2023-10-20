import { createContext, useContext, useState, useEffect } from "react";

const NewsContext = createContext();

export function NewsContextProvider ({children}) {


  const value = {
    
  }

  return <NewsContext.Provider value={ value }>
    {children}
  </NewsContext.Provider>
}

export function useNewsContext() {
  return useContext(NewsContext);
}