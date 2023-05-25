import axios from 'axios';
import { emailsLoadingAction, saveEmailsAction } from './actions';

export const getEmailsOperation = () => (dispatch, getState) => {
  dispatch(emailsLoadingAction(true))
  axios.get('/api/emails')
    .then(res => {
      dispatch(saveEmailsAction(res.data))
      dispatch(emailsLoadingAction(false))
    })
}

// function getEmailsOperation () {
//   return function (dispatch) {
//     // code
//   }
// }