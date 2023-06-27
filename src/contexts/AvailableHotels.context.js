import React, { createContext, useContext, useState } from 'react';

const AvailableHotelsContext = createContext({
  searchParams: '',
  setSearchParams: (searchParams) => {},
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);
  const [searchParams, setSearchParams] = useState('');

  return (
    <AvailableHotelsContext.Provider
      value={{
        showAvailableHotels,
        setShowAvailableHotels,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
