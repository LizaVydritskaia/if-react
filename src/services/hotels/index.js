import axios from 'axios';
import { API_popularHotels } from '../constants';

export const getHotels = async () => {
  const { data: hotels } = await axios.get(API_popularHotels);

  return hotels;
};
