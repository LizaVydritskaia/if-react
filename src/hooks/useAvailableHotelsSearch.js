import { useEffect } from 'react';

import { getAvailableHotels } from '../services/availableHotels';

import { useAvailableHotelsContext } from '../contexts/AvailableHotels.context';

export const useAvailableHotelsSearch = (params) => {
  const { availableHotels, setAvailableHotels } = useAvailableHotelsContext();

  useEffect(() => {
    getAvailableHotels(params).then((availableHotelsData) =>
      setAvailableHotels(availableHotelsData),
    );
  }, [params, setAvailableHotels]);

  return availableHotels;
};
