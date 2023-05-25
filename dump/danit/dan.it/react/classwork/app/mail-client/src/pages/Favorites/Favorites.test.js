import { render } from "@testing-library/react";
import { Favorites } from "./Favorites";

jest.mock('../../components/Email/Email', () => (props) => <div key={props.email.id} data-testid='test-email'>{props.email.topic}</div>)
jest.mock('../../components/Loader/Loader', () => () => <div data-testid='test-loader'>Loading...</div>)

const testEmails = [
  { id: 111, topic: 'Test email 111', body: 'Test body 111' },
  { id: 112, topic: 'Test email 112', body: 'Test body 112', favorite: true },
  { id: 113, topic: 'Test email 113', body: 'Test body 113', favorite: true }
]

describe('Testing Favorites.js', () => {
  test('Smoke test for Favorites', () => {
    render(<Favorites emails={testEmails} isLoading={false} />)
  })

  test('Favorites snapshot', () => {
    const { container } = render(<Favorites emails={testEmails} isLoading={false} />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  test('Favorites page filters out non-favorite emails', () => {
    const { getAllByTestId } = render(<Favorites emails={testEmails} isLoading={false} />)

    const emailCards = getAllByTestId('test-email');
    expect(emailCards.length).toBe(2);
  })

  test('Loader is shown correctly', () => {
    const { getByTestId } = render(<Favorites isLoading={true} />)

    const loader = getByTestId('test-loader');
    expect(loader).toBeInTheDocument();
  })
})