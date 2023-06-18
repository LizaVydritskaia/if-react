import React, { createContext, useContext, useRef } from 'react';

const AvailableHotelsContext = createContext({
  availableHotelsRef: null,
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const availableHotelsRef = useRef(null);

  return (
    <AvailableHotelsContext.Provider
      value={{
        availableHotelsRef,
      }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
