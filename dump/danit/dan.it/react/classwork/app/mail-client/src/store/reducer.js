import { combineReducers } from 'redux';
import userReducer from './user/reducer'
import emails from './emails/reducer'

const reducer = combineReducers({
  user: userReducer,
  emails
})

export default reducer;