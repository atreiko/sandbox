import React, { useState } from 'react'
import Select, { OnChangeValue } from 'react-select'
import { IOption } from './option.interface'

const options: IOption[] = [
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

const TsSelect = () => {
  const [currentCountries, setCurrentCountries] = useState<any>([])

  const getValue = () => {
    return currentCountries 
      ? options.filter((option) => currentCountries.indexOf(option.value) >= 0) 
      : []
  }

  const onChangeHandler = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCountries((newValue as IOption[]).map(val => val.value)) 
  }

  return (
    <>
      <h1 className='mb-3 text-white text-xl font-medium'>Choice Select</h1>
      <Select 
        onChange={onChangeHandler} 
        value={getValue()} 
        options={options} 
        placeholder='Choice countries'
        isMulti
        isSearchable
      />
    </>
  );
}

export default TsSelect