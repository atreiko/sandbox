import React from 'react';
import { useCountries } from './hooks/useCountries';
import { Routes, Route } from 'react-router-dom';
import Countries from './pages/Countries';
import Home from './pages/Home';
import Country from './pages/Country';
import CreateCountry from './pages/CreateCountry';
import './App.css';

function App() {

  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='countries' element={<Countries />} />
        <Route path='countries/:id' element={<Country />} />
        <Route path='create' element={<CreateCountry />} />
    </Routes>
  )

  // const { isLoading, countries } = useCountries()

  // return (
  //   <div className='container'>
  //     { 
  //       isLoading ? <h1>LOADING...</h1> : (
  //         countries?.length ? (
  //           <div className='cards'>

  //             {
  //               countries.map((country) =>(
  //                 <div key={country.id}>
  //                   <img  
  //                     src={country.image} 
  //                     alt={country.title} 
  //                     width={250} 
  //                     height={160} 
  //                   />
  //                   <h2>{country.title}</h2>
  //                   <p>Population: <b>{country.population}</b></p>
  //                 </div>
  //               ))
  //             }

  //           </div>
  //         ) : <h6>Elements not found.</h6>
  //       )
  //     }

  //   </div>
  // );
}

export default App;
