import { SET_CURRENT_USER } from "./types"

const reducer = (state = null, action) => {
  switch(action.type) {
    case SET_CURRENT_USER: {
      return action.payload
    }
    case 'TEST_ACTION': {
      console.log('TEST_ACTION in user reducer')
      return state;
    }
    default: {
      return state
    }
  }
}

export default reducer;