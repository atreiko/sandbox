import { Header } from './Header';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

// beforeAll
// afterAll

describe('Testing Header.js', () => {
  test('Smoke test of Header', () => {
    act(() => {
      // render(<Provider store={store}><Header /></Provider>, container)
      render(<Header />, container)
    })
  })

  test('Header shows title from props', () => {
    const testTitle = 'TEST TITLE';

    act(() => {
      render(<Header title={testTitle} />, container)
    })

    const title = document.getElementById('header-title')
    expect(title.textContent).toBe(testTitle);
  })

  test('User login div is not shown when user is not passed in props', () => {
    act(() => {
      render(<Header />, container)
    })

    const login = document.getElementById('user-login')
    expect(login).toBe(null);
  })

  test('User login is shown when user is passed in props', () => {
    const testUser = {login: 'TEST_LOGIN'}

    act(() => {
      render(<Header user={testUser} />, container)
    })

    const login = document.getElementById('user-login')
    expect(login.textContent).toBe(testUser.login);
  })
})