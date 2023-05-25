import React, { memo, useContext } from 'react'
import ThemeContext from '../../../../../practice/swapi-context/src/context/themeContext'
import Button from '../Button/Button'

function Header() {
  console.log('Rendering Header.js')
  const context = useContext(ThemeContext);

  return (
    <div>
      <h2>Header</h2>
      <Button title='Toggle theme' onClick={context.toggleTheme} />
    </div>
  )
}

export default memo(Header)
