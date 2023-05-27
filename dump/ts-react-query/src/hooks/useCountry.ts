import React from 'react'
import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountry = (id: string | undefined) => {
  const { 
    isLoading, 
    data: country
  } = useQuery(
    ['country list', id], 
    () => CountryService.getById(id || ''),
    {
      onError: (error: any) => {
        console.log(error.message);
      },
      select: ({data}): ICountry => data,
      enabled: !!id
    })
  return { isLoading, country }
}
