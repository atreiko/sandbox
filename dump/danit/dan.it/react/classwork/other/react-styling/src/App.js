import './App.scss';
import Inline from './components/Inline/Inline';
import CssModules from './components/Modules/CssModules';
import StyledComponents from './components/StyledComponents/StyledComponents';
import Header from './components/Header/Header';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <Inline />
      <CssModules />
      <StyledComponents />
      <Button variant='contained' color='primary'>Material Button</Button>
    </div>
  );
}

export default App;
