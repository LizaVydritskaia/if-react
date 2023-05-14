import { useEffect, useState } from 'react';

import { getAvailableHotels } from '../services/availableHotels';

import { useAvailableHotelsContext } from '../contexts/AvailableHotels.context';

export const useAvailableHotelsSearch = () => {
  const [searchParams, setSearchParams] = useState('');

  const { setAvailableHotels } = useAvailableHotelsContext();

  useEffect(() => {
    getAvailableHotels(searchParams).then((availableHotelsData) =>
      setAvailableHotels(availableHotelsData),
    );
  }, [searchParams, setAvailableHotels]);

  return { searchParams, setSearchParams };
};
