import React, { useEffect } from "react";
import axios from 'axios';
import Loader from "../Loader/Loader";
import Film from "../Film/Film";
import { connect } from "react-redux";

function Films({ films, setFilms, isLoading, setIsLoading }) {
  useEffect(() => {
    if (!films || !films.length) {
      axios('https://ajax.test-danit.com/api/swapi/films')
        .then(res => {
          setFilms(res.data)
          setIsLoading(false)
        })
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const filmItems = films.map(f => <Film key={f.id} film={f} />)

  return (
    <ol>
      {filmItems}
    </ol>
  );
}

const mapStateToProps = (state) => {
  return {
    films: state.films.data,
    isLoading: state.films.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilms: (films) => dispatch({ type: "SET_FILMS", payload: films }),
    setIsLoading: (isLoading) => dispatch({ type: "SET_FILMS_LOADING", payload: isLoading }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films)
