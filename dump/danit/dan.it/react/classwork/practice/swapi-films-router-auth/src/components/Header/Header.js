import React from 'react'

function Header({user, setUser}) {
  const isAuth = !!user
  
  const logOutUser = () => {
    setUser(null);
  }

  return (
    <div>
      {!isAuth && <div>Welcome, anonimous</div>}
      {isAuth && <div>{user.login}</div>}
      {isAuth && <div><button onClick={logOutUser}>Log out</button></div>}
    </div>
  )
}

export default Header
