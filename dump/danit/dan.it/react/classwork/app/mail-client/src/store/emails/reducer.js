import { SET_EMAILS, SET_EMAILS_LOADING, TOGGLE_FAVORITES } from "./types"

const initialState = {
  isLoading: true,
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAILS: {
      return { ...state, data: action.payload }
    }
    case SET_EMAILS_LOADING: {
      return { ...state, isLoading: action.payload }
    }
    case TOGGLE_FAVORITES: {
      const email = action.payload;
      const index = state.data.indexOf(email);
      const updatedEmail = {...email, favorite: !email.favorite}
      const newEmails = [...state.data]
      newEmails.splice(index, 1, updatedEmail)

      return {...state, data: newEmails}
    }
    case 'TEST_ACTION': {
      console.log('TEST_ACTION in email reducer')
      return state;
    }
    default: {
      return state
    }
  }
}

export default reducer;