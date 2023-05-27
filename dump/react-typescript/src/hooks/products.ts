import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';


const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  const addProduct = (product: IProduct) => {
    setProducts(prev => [...prev, product])
  }

  return { products, loading, error, addProduct }
} 

export default useProducts


