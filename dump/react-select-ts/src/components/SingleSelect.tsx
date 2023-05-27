import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'south-korea',
    label: 'South Korea'
  },
  {
    value: 'germany',
    label: 'Germany'
  },
  {
    value: 'canada',
    label: 'Canada'
  },
]

const SingleSelect = () => {
  const [currentCountry, setCurrentCountry] = useState('')

  const getValue = () => {
    return currentCountry ? options.find(option => option.value === currentCountry) : ''
  }

  const onChangeHandler = (newValue: any) => {
    setCurrentCountry(newValue.value) 
  }

  return (
    <>
      <h1 className='mb-3 text-white text-xl font-medium'>Choice Select</h1>
      <Select 
        onChange={onChangeHandler} 
        value={getValue()} 
        options={options} 
        placeholder='Choice countries'
      />
    </>
  );
}

export default SingleSelect