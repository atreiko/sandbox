import React from 'react';
import { useHistory } from 'react-router-dom';
import './Page404.scss';

function Page404() {
  const history = useHistory();

  const goToHome = () => {
    history.push('/')
  }

  return (
    <div className='page-404'>
      <h2>404</h2>
      <h3>Page not found</h3>
      <div><button onClick={goToHome}>Go to home page</button></div>
    </div>
  )
}

export default Page404
