import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Films from './components/Films';
import Layout from './components/Layout';
import FilmDetails from './dist/FilmDetails';
import { Navigate } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className='App'> 
    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='films' element={<Films />} />
        <Route path=':filmId' element={<FilmDetails />} />

        <Route
          path="/"
          element={<Navigate to="/films" />}
        />

      </Route >

    </Routes> 
  </div>
  )
}

export default App;
