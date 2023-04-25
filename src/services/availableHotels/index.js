import axios from 'axios';
import { API_availableHotels } from '../constants';

export const getAvailableHotels = async (inputValue) => {
  const { data: availableHotels } = await axios.get(API_availableHotels, {
    params: {
      search: inputValue,
    },
  });

  return availableHotels;
};
