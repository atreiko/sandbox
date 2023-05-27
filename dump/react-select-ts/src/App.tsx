import React from 'react';
import MultipleSelect from './components/MultipleSelect';
import SingleSelect from './components/SingleSelect';
import StyledSelect from './components/StyledSelect/StyledSelect';
import TsSelect from './components/TS/TsSelect';


const App = () => {


  return (
    <div className='w-4/5 mx-auto my-10'>
      {/* <SingleSelect /> */}

      {/* <MultipleSelect /> */}

      {/* <TsSelect /> */}
      
      <StyledSelect />
    </div>
  );
}

export default App;
