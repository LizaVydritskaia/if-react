import { API, API_availableHotels } from './constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const availableHotels = createApi({
  reducerPath: 'availableHotelsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getAvailableHotels: builder.query({
      query: ({ search, checkInOut, adults, children, rooms }) => {
        const searchParams = new URLSearchParams({
          search,
          checkInOut,
          adults,
          children,
          rooms,
        });

        return `${API_availableHotels}?${searchParams.toString()}`;
      },
    }),
  }),
});

export const { useGetAvailableHotelsQuery } = availableHotels;
