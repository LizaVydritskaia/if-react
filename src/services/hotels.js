import { API, API_popularHotels } from './constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const hotels = createApi({
  reducerPath: 'hotelsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => API_popularHotels,
    }),
  }),
});

export const { useGetHotelsQuery } = hotels;
