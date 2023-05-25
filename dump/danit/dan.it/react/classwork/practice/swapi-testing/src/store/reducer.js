const initialState = {
  films: {
    isLoading: true,
    data: []
  },
  filmDetails: {
    isLoading: true,
    data: null
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILMS': {
      return {...state, films: {...state.films, data: action.payload}}
    }
    case 'SET_FILMS_LOADING': {
      return {...state, films: {...state.films, isLoading: action.payload}}
    }
    case 'SET_FILM_DETAILS': {
      return {...state, filmDetails: {...state.filmDetails, data: action.payload}}
    }
    case 'SET_FILM_DETAILS_LOADING': {
      return {...state, filmDetails: {...state.filmDetails, isLoading: action.payload}}
    }
    default: {
      return state
    }
  }
}

export default reducer;