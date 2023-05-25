import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Characters from '../Characters/Characters';
import axios from 'axios';
import Loader from '../Loader/Loader';

const FilmDetails = () => {
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { filmId } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios(`https://ajax.test-danit.com/api/swapi/films/${filmId}`)
      .then(res => {
        setFilm(res.data)
        setIsLoading(false)
      })
  })

  const goToFilms = () => {
    history.push('/films');
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <div>Title: {film.name}</div>
      <div>Episode ID: {film.episodeId}</div>
      <div>Opening crawl: {film.openingCrawl}</div>
      <div>Characters: <Characters film={film} /></div>
      <div><button onClick={goToFilms}>Go back</button></div>
    </>
  )
}

export default FilmDetails