import React, { createContext, useContext, useState } from 'react';

const AvailableHotelsContext = createContext({
  availableHotels: [],
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [availableHotels, setAvailableHotels] = useState([]);

  return (
    <AvailableHotelsContext.Provider
      value={{ availableHotels, setAvailableHotels }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
