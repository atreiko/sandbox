import React, { PureComponent } from 'react'
import FilmDetails from '../FilmDetails/FilmDetails';

class Film extends PureComponent {
  state = {
    expanded: false
  }

  expandFilm = () => {
    this.setState({ expanded: true })
  }

  render() {
    const { film } = this.props;
    const { expanded } = this.state;

    return (
      <li>
        <div>
          {film.name}
          {!expanded && <button onClick={this.expandFilm}>Детальнее</button>}
        </div>
        {expanded && <FilmDetails film={film} />}
      </li>
    )
  }
}

export default Film