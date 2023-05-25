import React, { useState } from 'react'
import FilmDetails from '../FilmDetails/FilmDetails';

const Film = (props) => {
  const { film } = props;
  const [expanded, setExpanded] = useState(false);

  const expandFilm = () => {
    setExpanded(true)
  }

  return (
    <li>
      <div>
        {film.name}
        {!expanded && <button onClick={expandFilm}>Детальнее</button>}
      </div>
      {expanded && <FilmDetails film={film} />}
    </li>
  )
}

export default Film