import React, { useState } from 'react'
import Select, { OnChangeValue } from 'react-select'
import { IOption } from '../TS/option.interface'
import makeAnimated from 'react-select/animated'

import './styled-select.scss'

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

const animatedComponents = makeAnimated()

const StyledSelect = () => {
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
        classNamePrefix={'styled-select'}
        //@ts-ignore
        onChange={onChangeHandler} 
        value={getValue()} 
        options={options} 
        placeholder='Choice countries'
        isMulti
        components={animatedComponents}
        isSearchable
        
      />
    </>
  );
}

export default StyledSelect