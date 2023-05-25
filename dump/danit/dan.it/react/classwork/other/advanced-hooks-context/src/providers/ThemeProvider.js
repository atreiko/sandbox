import React, { useCallback, useState } from 'react'
import ThemeContext, { themes } from '../../../../practice/swapi-context/src/context/themeContext';

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme === themes.dark ? themes.light : themes.dark)
  }, [])

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
