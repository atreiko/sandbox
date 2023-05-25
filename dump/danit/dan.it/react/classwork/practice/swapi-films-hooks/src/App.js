import { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "./components/Loader/Loader";
import Film from "./components/Film/Film";

const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios('https://ajax.test-danit.com/api/swapi/films')
      .then(res => {
        setFilms(res.data)
        setIsLoading(false)
      })
  })

  if (isLoading) {
    return <Loader />
  }

  const filmItems = films.map(f => <Film key={f.id} film={f} />)

  return (
    <ol>
      {filmItems}
    </ol>
  );
}

export default App;
