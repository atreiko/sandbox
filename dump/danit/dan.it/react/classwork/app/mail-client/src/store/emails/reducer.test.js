import reducer from './reducer';
import { SET_EMAILS, SET_EMAILS_LOADING, TOGGLE_FAVORITES } from './types';

const initialState = {
  data: [],
  isLoading: true
}

const testEmails = [
  {id: 111, topic: 'Test email 111', body: 'Test body 111'},
  {id: 112, topic: 'Test email 112', body: 'Test body 112'},
  {id: 113, topic: 'Test email 113', body: 'Test body 113'}
]

describe('Testing email reducer', () => {
  test('Testing SET_EMAILS', () => {
    const action = {type: SET_EMAILS, payload: testEmails}

    const newState = reducer(initialState, action)

    expect(newState.data).toBe(testEmails)
    expect(newState.data.length).toBe(3)
    expect(newState.data[0]).toEqual({id: 111, topic: 'Test email 111', body: 'Test body 111'})
  })

  test('Testing SET_EMAILS_LOADING', () => {
    const action = {type: SET_EMAILS_LOADING, payload: false}

    const newState = reducer(initialState, action)

    expect(newState.isLoading).toBeFalsy()
  })

  // case TOGGLE_FAVORITES: {
  //   const email = action.payload;
  //   const index = state.data.indexOf(email);
  //   const updatedEmail = {...email, favorite: !email.favorite}
  //   const newEmails = [...state.data]
  //   newEmails.splice(index, 1, updatedEmail)

  //   return {...state, data: newEmails}
  // }

  test('TOGGLE_FAVORITES adds isFavorite prop', () => {
    const action = {type: TOGGLE_FAVORITES, payload: testEmails[1]}

    let newState = reducer({data: testEmails, isLoading: false}, action)

    expect(newState.data[1].favorite).toBeTruthy()
    expect(newState.data[0].favorite).toBe(undefined)

    const newAction = {type: TOGGLE_FAVORITES, payload: newState.data[1]}
    newState = reducer(newState, newAction)

    expect(newState.data[1].favorite).toBeFalsy()
  })
})