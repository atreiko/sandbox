import { Component } from "react";
import axios from 'axios';
import Loader from "./components/Loader/Loader";
import Film from "./components/Film/Film";

class App extends Component {
  state = {
    films: [],
    isLoading: true
  }

  componentDidMount() {
    axios('https://ajax.test-danit.com/api/swapi/films')
      .then(res => this.setState({ films: res.data, isLoading: false }))
  }

  render() {
    const { films, isLoading } = this.state;

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
}

export default App;
