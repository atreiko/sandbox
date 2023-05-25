import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div>
      <div><NavLink exact className='link' activeClassName='link--active' to='/inbox'>Inbox</NavLink></div>
      <div><NavLink exact className='link' activeClassName='link--active' to='/favorites'>Favorites</NavLink></div>
      <div><NavLink exact className='link' activeClassName='link--active' to='/sent'>Sent</NavLink></div>
      <div><NavLink exact className='link' activeClassName='link--active' to='/login'>Login</NavLink></div>
    </div>
  )
}

export default Sidebar
