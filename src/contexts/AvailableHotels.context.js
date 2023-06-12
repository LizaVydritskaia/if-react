import React, { createContext, useContext, useState } from 'react';

const AvailableHotelsContext = createContext({
  availableHotels: [],
  showAvailableHotels: false,
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [availableHotels, setAvailableHotels] = useState([]);
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);

  return (
    <AvailableHotelsContext.Provider
      value={{
        availableHotels,
        setAvailableHotels,
        showAvailableHotels,
        setShowAvailableHotels,
      }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
