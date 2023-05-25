import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Characters from '../Characters/Characters';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';

const FilmDetails = () => {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const film = useSelector(state => state.films.data.find(f => f.id === +filmId) || state.filmDetails.data)
  const isLoading = useSelector(state => !film && state.filmDetails.isLoading)

  const history = useHistory();

  useEffect(() => {
    if (!film) {
      axios(`https://ajax.test-danit.com/api/swapi/films/${filmId}`)
        .then(res => {
          dispatch({ type: "SET_FILM_DETAILS", payload: res.data })
          dispatch({ type: "SET_FILM_DETAILS_LOADING", payload: false })
        })
    }
  }, [filmId])

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