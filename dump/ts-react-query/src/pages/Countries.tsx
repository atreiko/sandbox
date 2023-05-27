import React from 'react'
import { useCountries } from '../hooks/useCountries';
import '../App.css';

const Countries = () => {
  const { isLoading, countries, refetch } = useCountries()

  return (
    <div className='container'>
      { 
        isLoading ? <h1>LOADING...</h1> : (
          countries?.length ? (
            <div className='cards'>

              {
                countries.map((country) =>(
                  <div key={country.id}>
                    <img  
                      src={country.image} 
                      alt={country.title} 
                      width={250} 
                      height={160} 
                    />
                    <h2>{country.title}</h2>
                    <p>Population: <b>{country.population}</b></p>
                  </div>
                ))
              }

            </div>
          ) : <h6>Elements not found.</h6>
        )
      }
      <button className='countries-btn' onClick={() => refetch()}>Fetch Data</button>
    </div>
  );
}

export default Countries