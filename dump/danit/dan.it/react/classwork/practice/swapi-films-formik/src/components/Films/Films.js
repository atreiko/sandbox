import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "../Loader/Loader";
import Film from "../Film/Film";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios('https://ajax.test-danit.com/api/swapi/films')
      .then(res => {
        setFilms(res.data)
        setIsLoading(false)
      })
  }, [])

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

export default Films
