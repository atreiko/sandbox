import React, { useContext } from 'react'
import ThemeContext from '../../../../../practice/swapi-context/src/context/themeContext';

function Button({ title, onClick }) {
  const context = useContext(ThemeContext);

  return (
    <button style={context.theme} onClick={onClick}>{title}</button>
  )
}


export default Button

// <ThemeContext.Consumer>
    //   {(theme) => (
    //     <button style={theme} onClick={onClick}>{title}</button>
    //   )}
    // </ThemeContext.Consumer>