import { shallow, mount, render } from 'enzyme';
import { Favorites } from "./Favorites";

const testEmails = [
  { id: 111, topic: 'Test email 111', body: 'Test body 111' },
  { id: 112, topic: 'Test email 112', body: 'Test body 112', favorite: true },
  { id: 113, topic: 'Test email 113', body: 'Test body 113', favorite: true }
]

describe('Testing Favorites.js', () => {
  test('Smoke test for Favorites', () => {
    shallow(<Favorites emails={testEmails} isLoading={false} />);
  })

  test('Favorites snapshot', () => {
    const wrapper = shallow(<Favorites emails={testEmails} isLoading={false} />);
    expect(wrapper.debug()).toMatchSnapshot()
  })

  test('Favorites page filters out non-favorite emails', () => {
    const wrapper = shallow(<Favorites emails={testEmails} isLoading={false} />)
    const emailCards = wrapper.find('Email')
    expect(emailCards.length).toBe(2);
  })
})