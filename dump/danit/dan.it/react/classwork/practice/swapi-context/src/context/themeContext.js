import React from 'react';

export const themes = {
  Light: {
    color: '#000',
    background: '#fff'
  },
  Dark: {
    color: '#fff',
    background: '#222'
  },
  Psychodelic: {
    color: 'lime',
    background: 'pink'
  }
}

const ThemeContext = React.createContext({theme: themes.dark});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;