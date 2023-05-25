import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import Film from "../Film/Film";
import { connect } from "react-redux";
import { getFilms } from "../../store/operations";

function Films({ films, getFilms, isLoading }) {
  useEffect(() => {
    if (!films || !films.length) {
      getFilms()
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
    getFilms: () => dispatch(getFilms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films)
