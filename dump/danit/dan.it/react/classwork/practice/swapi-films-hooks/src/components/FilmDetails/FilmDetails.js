import React from 'react'
import Characters from '../Characters/Characters';

const FilmDetails = (props) => {
  const { film } = props;

  return (
    <>
      <div>Episode ID: {film.episodeId}</div>
      <div>Opening crawl: {film.openingCrawl}</div>
      <div>Characters: <Characters film={film} /></div>
    </>
  )
}

export default FilmDetails