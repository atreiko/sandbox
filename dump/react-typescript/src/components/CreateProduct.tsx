import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import ErrorMessage from './ErrorMessage'

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'Lorem ipsum dolor sit amet.',
  image: 'https://picsum.photos/200/300?random=1',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid title.')
      return
    }

    productData.title = value

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    console.log(response);
    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  
  return (
    <form onSubmit={submitHandler}>
      <input 
        type='text'
        className='border px-4 py-2 mb-2 w-full outline-0'
        placeholder='Enter product title'
        value={value}
        onChange={changeHandler}
      />
      { error && <ErrorMessage error={error} /> }
      <button className='px-4 py-2 bg-yellow-400 hover:text-white' type='submit'>Create</button>
    </form>
  )
}

export default CreateProduct