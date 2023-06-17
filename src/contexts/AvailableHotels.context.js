import React, { createContext, useContext, useRef, useState } from 'react';

const AvailableHotelsContext = createContext({
  availableHotels: [],
  showAvailableHotels: false,
  availableHotelsRef: null,
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [availableHotels, setAvailableHotels] = useState([]);
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);
  const availableHotelsRef = useRef(null);

  return (
    <AvailableHotelsContext.Provider
      value={{
        availableHotels,
        setAvailableHotels,
        showAvailableHotels,
        setShowAvailableHotels,
        availableHotelsRef,
      }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
