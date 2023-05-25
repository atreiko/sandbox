import './App.css';
import ControlledForm from './components/ControlledForm/ControlledForm';
import FormikForm from './components/FormikForm/FormikForm';
import FormikForm2 from './components/FormikForm2/FormikForm2';
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm';

function App() {
  return (
    <div className="App">
      <UncontrolledForm />
      <ControlledForm />
      <FormikForm />
      <FormikForm2 />
    </div>
  );
}

export default App;
