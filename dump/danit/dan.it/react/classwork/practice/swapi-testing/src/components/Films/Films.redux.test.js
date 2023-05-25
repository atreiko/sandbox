import Films from './Films';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const testAction = { type: 'TEST_GET_FILMS' };
jest.mock('../../store/operations', () => ({
  getFilms: () => testAction
}));

const mockStore = configureMockStore([thunk])

jest.mock("../Loader/Loader", () => () => <div data-testid='loader'>Loading</div>)
jest.mock("../Film/Film", () => (props) => <div data-testid='film'>{props.film.name}</div>)

const testFilms = [{ id: 1, name: "Film 1" }, { id: 2, name: "Film 2" }, { id: 3, name: "Film 3" }]

describe('Testing Films', () => {
  test('Films are shown on screen', () => {
    const store = mockStore({ films: { data: testFilms, isLoading: false } });

    const getFilmsMock = jest.fn();
    const { getAllByTestId } = render(<Provider store={store}><Films /></Provider>);

    const filmItems = getAllByTestId('film');
    expect(filmItems.length).toBe(3);
    expect(filmItems[1].textContent).toBe(testFilms[1].name);
    expect(getFilmsMock).not.toHaveBeenCalled();
  });

  test('Films are fetched from server if not present', () => {
    const store = mockStore({
      films: {
        data: [],
        isLoading: true
      }
    });

    render(<Provider store={store}><Films /></Provider>);

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toBe(testAction);
  });
});
