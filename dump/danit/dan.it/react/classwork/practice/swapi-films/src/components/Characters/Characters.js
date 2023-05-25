import React, { PureComponent } from 'react'
import Loader from '../Loader/Loader';
import axios from 'axios';

class Characters extends PureComponent {
  state = {
    characters: [],
    isLoading: true
  }

  componentDidMount() {
    const { film } = this.props;
    axios.all(film.characters.map(c => axios(c)))
      .then(res => this.setState(
        { isLoading: false, characters: res.map(i => i.data) }
      ))
  }

  render() {
    const { characters, isLoading } = this.state;

    if (isLoading) {
      return <Loader />
    }

    const characterNames = characters.map(c => c.name).join(', ');

    return characterNames;
  }
}

export default Characters