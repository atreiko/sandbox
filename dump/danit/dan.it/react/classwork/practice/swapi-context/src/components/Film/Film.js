import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../context/themeContext';

const Film = (props) => {
  const { film } = props;
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  
  const showFilmDetails = () => {
    history.push(`/films/${film.id}`)
  }

  return (
    <li>
      <div style={themeContext.theme}>
        {film.name}
        <button onClick={showFilmDetails}>Детальнее</button>
      </div>
    </li>
  )
}

export default Film