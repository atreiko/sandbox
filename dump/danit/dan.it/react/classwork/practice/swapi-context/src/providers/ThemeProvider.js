import React, { useState } from 'react'
import ThemeContext, { themes } from '../context/themeContext';

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(themes.Dark);

  return (
    <ThemeContext.Provider value={{theme, setTheme, themes, default: 'Dark'}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
