import React from 'react'
import { useParams } from 'react-router-dom'
import { useCountry } from '../hooks/useCountry'
import '../App.css'

const Country = () => {
  const { id } = useParams()
  const { isLoading, country } = useCountry(String(id))
  
  return (
    <div className='container country'>
      <h1>{country?.title}</h1>
      { 
        isLoading ? <h1>LOADING...</h1> : (
          country ? (
            <div className='cards'>
              <div>
                <img  
                  src={country?.image || ''} 
                  alt={country?.title} 
                  width={250} 
                  height={160} 
                />
                <h2>{country?.title}</h2>
                <p>Population: <b>{country?.population}</b></p>
              </div>
            </div>
          ) : <h6>Element not found.</h6>
        )
      } 
    </div>
  )
}

export default Country