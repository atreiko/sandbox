import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import axios from 'axios';

const Characters = (props) => {
  const { film } = props;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.all(film.characters.map(c => axios(c)))
      .then(res => {
        setCharacters(res.map(i => i.data));
        setIsLoading(false);
      })
  }, [film])

  if (isLoading) {
    return <Loader />
  }

  const characterNames = characters.map(c => c.name).join(', ');

  return characterNames;
}

export default Characters