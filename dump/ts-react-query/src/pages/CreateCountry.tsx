import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { CountryService, ICountry } from '../services/country.service'

const CreateCountry = () => {
  const [data, setData] = useState<ICountry>({
    id: 5,
    image: '/images/south-korea.jpeg',
    population: '',
    title: ''
  } as ICountry)
  const navigate = useNavigate()

  const { isLoading, mutateAsync } = useMutation('create country', 
  (data: ICountry) => CountryService.crete(data), {
    onError: (error: any) => {
      console.log(error.message);
    },
    onSuccess: () => {
      navigate('/countries')
    }
  })
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await mutateAsync(data)
    console.log(data);
    
  }

  return (
    <div className='container country'>
      <h1>Create Country</h1>
      <div className='cards'>
        <div>
          <form onSubmit={handleSubmit}>
            <input value={data.id} onChange={e => setData({...data, id: +e.target.value})} placeholder='Enter id'/>
            <input value={data.image} onChange={e => setData({...data, image: e.target.value})} placeholder='Enter image'/>
            <input value={data.title} onChange={e => setData({...data, title: e.target.value})} placeholder='Enter title'/>
            <input value={data.population} onChange={e => setData({...data, population: e.target.value})} placeholder='Enter population'/>
            <button disabled={isLoading}>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateCountry