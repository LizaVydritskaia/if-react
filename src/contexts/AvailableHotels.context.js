import React, { createContext, useContext, useRef, useState } from 'react';

const AvailableHotelsContext = createContext({
  availableHotelsRef: null,
  showAvailableHotels: false,
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const availableHotelsRef = useRef(null);
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);

  return (
    <AvailableHotelsContext.Provider
      value={{
        availableHotelsRef,
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
