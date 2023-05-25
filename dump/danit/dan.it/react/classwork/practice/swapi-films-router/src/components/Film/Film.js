import React from 'react'
import { useHistory } from 'react-router-dom';

const Film = (props) => {
  const { film } = props;
  const history = useHistory();
  
  const showFilmDetails = () => {
    history.push(`/films/${film.id}`)
  }

  return (
    <li>
      <div>
        {film.name}
        <button onClick={showFilmDetails}>Детальнее</button>
      </div>
    </li>
  )
}

export default Film