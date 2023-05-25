import Email from './Email';
import { render } from '@testing-library/react';
import store from '../../store/store';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { TOGGLE_FAVORITES } from '../../store/emails/types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('react-router-dom', () => ({
  Link: 'a',
  useHistory: () => { },
  withRouter: (Component) => (props) => <Component {...props} />
}))

const testEmail = { id: 111, topic: 'Test email 111', body: 'Test email 111 body' }

describe('Testing Email.js', () => {
  test('Smoke test', () => {
    render(<Provider store={store}><Email email={testEmail} /></Provider>)
  })

  test('Clicking start icon sends toggle favorites action to redux', () => {
    const store = mockStore({ emails: { data: [], isLoading: false } })

    const { getByTestId } = render(<Provider store={store}><Email email={testEmail} /></Provider>)
    const icon = getByTestId('icon');
    
    expect(store.getActions().length).toBe(0);
    userEvent.click(icon);
    expect(store.getActions().length).toBe(1);
    expect(store.getActions()).toEqual([{type: TOGGLE_FAVORITES, payload: testEmail}]);
  })
})