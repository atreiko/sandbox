import { getFilms } from './operations';

jest.mock('axios', () => {
  return () => new Promise((resolve) => {
    resolve({data: 'TEST_DATA'})
  })
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

test('Testing getFilms function', async () => {
  const dispatchMock = jest.fn();

  getFilms()(dispatchMock);

  await flushPromises();

  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: "SET_FILMS_LOADING", payload: true })
  expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: "SET_FILMS", payload: 'TEST_DATA' })
  expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: "SET_FILMS_LOADING", payload: false })
})