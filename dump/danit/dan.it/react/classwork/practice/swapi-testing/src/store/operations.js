import axios from 'axios';

export const getFilms = () => (dispatch) => {
  dispatch({ type: "SET_FILMS_LOADING", payload: true })
  axios('https://ajax.test-danit.com/api/swapi/films')
    .then(res => {
      dispatch({ type: "SET_FILMS", payload: res.data })
      dispatch({ type: "SET_FILMS_LOADING", payload: false })
    })
}

export const getFilmDetails = (filmId) => (dispatch) => {
  dispatch({ type: "SET_FILM_DETAILS_LOADING", payload: true })
  axios(`https://ajax.test-danit.com/api/swapi/films/${filmId}`)
    .then(res => {
      dispatch({ type: "SET_FILM_DETAILS", payload: res.data })
      dispatch({ type: "SET_FILM_DETAILS_LOADING", payload: false })
    })
}
