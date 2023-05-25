import React, { PureComponent } from 'react'
import Characters from '../Characters/Characters';

class FilmDetails extends PureComponent {
  render() {
    const { film } = this.props;

    return (
      <>
        <div>Episode ID: {film.episodeId}</div>
        <div>Opening crawl: {film.openingCrawl}</div>
        <div>Characters: <Characters film={film} /></div>
      </>
    )
  }
}

export default FilmDetails