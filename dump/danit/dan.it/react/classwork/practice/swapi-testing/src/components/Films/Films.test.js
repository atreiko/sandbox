import { Films } from './Films';
import { render } from '@testing-library/react';

jest.mock("../Loader/Loader", () => () => <div data-testid='loader'>Loading</div>)
jest.mock("../Film/Film", () => (props) => <div data-testid='film'>{props.film.name}</div>)

describe('Testing Films', () => {
  test('Smoke test', () => {
    render(<Films films={[]} getFilms={jest.fn()} />)
  })

  test('isLoading prop shows loader on screen', () => {
    const { getByTestId } = render(<Films isLoading={true} getFilms={jest.fn()} />)
    getByTestId('loader')
  })

  test('Films are shown on screen', () => {
    const testFilms = [{id: 1, name: "Film 1"}, {id: 2, name: "Film 2"}, {id: 3, name: "Film 3"}]
    const getFilmsMock = jest.fn()
    const { getAllByTestId } = render(<Films films={testFilms} getFilms={getFilmsMock} />)
    
    const filmItems = getAllByTestId('film');
    expect(filmItems.length).toBe(3);
    expect(filmItems[1].textContent).toBe(testFilms[1].name)
    expect(getFilmsMock).not.toHaveBeenCalled();
  })

  test('Films are fetched from server if not present', () => {
    const getFilmsMock = jest.fn()
    render(<Films films={[]} getFilms={getFilmsMock} />)

    expect(getFilmsMock).toHaveBeenCalledTimes(1);
  })
})