import React from 'react'
import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountries = () => {
  const { 
    isLoading, 
    data: countries,
    refetch
  } = useQuery( 'country list', () => CountryService.getAll(),
    {
      onError: (error: any) => {
        console.log(error.message);
        
      },
      select: ({data}): ICountry[] => data.map(country => ({
        ...country,
        title: country.title + ' !!!'
      })),
      enabled: false
    })
  return { isLoading, countries, refetch }
}
