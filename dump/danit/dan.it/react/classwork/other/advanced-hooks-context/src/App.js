import { useReducer, useMemo, useCallback, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import reducer from './reducers/emailReducer';
import ThemeProvider from './providers/ThemeProvider';

// useReducer
// memo
// useMemo
// useCallback

// useLayoutEffect
// useImperativeHandle

// useContext

const testEmails = [
  { id: 1, topic: 'Email 1', body: 'Email 1 - Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.' },
  { id: 2, topic: 'Email 2', body: 'Email 2 - Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.' },
  { id: 3, topic: 'Email 3', body: 'Email 3 - Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.' }
]

function App() {
  console.log('Rendering App.js')
  const [emails, dispatch] = useReducer(reducer, [])

  const fetchEmails = useCallback(() => {
    dispatch({ type: 'SET_EMAILS', payload: testEmails })
  }, [])

  // useEffect(() => {
  //   fetchEmails()
  // }, [])

  const emailCards = useMemo(() => emails.map(e => <div key={e.id}>{e.topic}</div>), [emails])

  // const ids = useMemo(() => emails.map(e => e.id), [emails])
  const numbers = useMemo(() => [1, 2, 3], [])

  return (
    <div className="App">
      {emailCards}

      <Button title='Click me' />
      <ThemeProvider>
        <Header />
        <Body title='Hello world' numbers={numbers} fetchEmails={fetchEmails} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
