import { render/*, fireEvent*/ } from '@testing-library/react';
import { Login } from './Login';
import userEvent from '@testing-library/user-event'

describe('Testing Login.js', () => {
  test('Smoke test of Login', () => {
    render(<Login />)
  })

  test('Clicking Log In button submits form', () => {
    const setUserMock = jest.fn();
    const { getByTestId } = render(<Login setUser={setUserMock} />)
    const loginButton = getByTestId('loginButton')
    expect(loginButton).toBeInTheDocument();
    
    expect(setUserMock).not.toHaveBeenCalled()
    // loginButton.dispatchEvent(new Event('click'))
    // fireEvent.click(loginButton)
    userEvent.click(loginButton)
    expect(setUserMock).toHaveBeenCalledTimes(1)
  })

  test('Login and password are submitted during the login process', () => {
    const setUserMock = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(<Login setUser={setUserMock} />)
    const loginButton = getByTestId('loginButton')
    expect(loginButton).toBeInTheDocument();
    
    expect(setUserMock).not.toHaveBeenCalled()
    
    const loginInput = getByPlaceholderText(/email/i)
    const passwordInput = getByPlaceholderText(/password/i)
    const testEmail = 'admin@test.com';
    const testPassword = '123456qwerty';
    userEvent.type(loginInput, testEmail);
    userEvent.type(passwordInput, testPassword);

    userEvent.click(loginButton)
    expect(setUserMock).toHaveBeenCalledTimes(1)
    expect(setUserMock).toHaveBeenCalledWith({login: testEmail, password: testPassword})
  })
})