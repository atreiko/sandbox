import React from 'react';
import './Error500.scss';
import deathStar from './death-star.png';
import { useHistory } from 'react-router-dom';

const Error500 = () => {
  const history = useHistory();
  console.log(history)

  const goToHome = () => {
    history.push('/')
  }

  return (
    <div className='error-500'>
      <div><img src={deathStar} alt='death-star'></img></div>
      <h3>An error has occurred</h3>
      <h4>But we already sent droids to fix it</h4>
      <div><button onClick={goToHome}>Go to home page</button></div>
    </div>
  )
}

export default Error500