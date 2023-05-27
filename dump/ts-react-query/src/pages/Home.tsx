import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Home = () => {
  const navigate = useNavigate()

  const toCountries = () => {
    navigate('/countries')
  }

  return (
    <div className='container'>
      <button className='home-btn' onClick={toCountries}>
        Go to countries
      </button>
    </div>
  )
}

export default Home