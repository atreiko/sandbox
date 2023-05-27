import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <h1>About us</h1>
      <div className='container' style={{display: 'flex', flexDirection: 'column'}}>
        <Link to='contacts'>To contacts info</Link>
        <Link to='team'>To team info</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default AboutPage