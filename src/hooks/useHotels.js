import { useEffect, useState } from 'react';

import { getHotels } from '../services/hotels';

export const useHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels().then((hotelsData) => setHotels(hotelsData));
  }, []);

  return hotels;
};
