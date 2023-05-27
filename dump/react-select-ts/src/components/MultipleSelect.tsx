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
  {
    value: 'japan',
    label: 'Japan'
  }, 
]

let isMultiple = true

const MultipleSelect = () => {
  const [currentCountries, setCurrentCountries] = useState<any>(['canada', 'japan'])

  const getValue = () => {
    if (currentCountries) {
      return isMultiple 
        ? options.filter((option) => currentCountries.indexOf(option.value) >= 0) 
        : options.find(option => option.value === currentCountries)
    } else {
      return isMultiple ? [] : ''
    }
  }

  const onChangeHandler = (newValue: any) => {
    setCurrentCountries(isMultiple ? newValue.map((val: any) => val.value) : newValue) 
  } 

  return (
    <>
      <h1 className='mb-3 text-white text-xl font-medium'>Choice Select</h1>
      <Select 
        onChange={onChangeHandler} 
        value={getValue()} 
        options={options} 
        isMulti={isMultiple}
        placeholder='Choice countries'
        
        isLoading
        isSearchable
      />
    </>
  );
}

export default MultipleSelect