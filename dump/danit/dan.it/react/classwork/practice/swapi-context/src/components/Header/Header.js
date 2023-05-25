import React, { useContext } from 'react'
import ThemeContext from '../../context/themeContext';

function Header({ user, setUser }) {
  const themeContext = useContext(ThemeContext);
  const isAuth = !!user

  const logOutUser = () => {
    setUser(null);
  }

  const selectOptions = Object.keys(themeContext.themes).map(o => (
    <option key={o} value={o}>{o}</option>
  ))

  const changeTheme = (e) => {
    themeContext.setTheme(themeContext.themes[e.target.value])
  }

  return (
    <div>
      {!isAuth && <div>Welcome, anonimous</div>}
      {isAuth && <div>{user.login}</div>}
      {isAuth && <div><button onClick={logOutUser}>Log out</button></div>}
      <select onChange={changeTheme} defaultValue={themeContext.default}>
        {selectOptions}
      </select>
    </div>
  )
}

export default Header
