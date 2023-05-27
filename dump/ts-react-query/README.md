# React Query/TypeScript

TypeScript: 
`npx create-react-app --template typescript .`
React Query: 
`npm i react-query`
Json Server: 
`npm i json-server`

---

Create db.json in root

% `npx json-server --watch db.json --port 3535`

---

index.tsx
```tsx
import { QueryClient, QueryClientProvider } from 'react-query';
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
```

refetchOnWindowFocus: false - повторный запрос получения данных, если при смене окна браузера

---

useQuery() первым параметром получает уникальный ключ 'country list', 
Вторым параметром callback где мы делаем запрос,
Третим параметром options

Countries.tsx
```tsx
import { useQuery } from 'react-query';
import { CountryService } from './services/country.service';

  const { 
    isLoading, 
    data:response 
  } = useQuery( 'country list', () => CountryService.getAll(),
    {
      onError: (error: any) => {
        console.log(error.message);
      }
    })
```

В onSuccess можем сеттить в useState, а не деструктуризировать из useQuery
Countries.tsx
```tsx
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CountryService, ICountry } from './services/country.service';

  const [data, setData] = useState<ICountry[]>([])

  const { 
    isLoading, 
  } = useQuery( 'country list', () => CountryService.getAll(),
    {
      onSuccess: ({data}) => {
        setCountries(data)
      },
      onError: (error: any) => {
        console.log(error.message);
      }
    })
```
С помощью опции select можем обработать данные на лету. 
В нашем примере принимаем data и добавляем к ' !!!' к title
Countries.tsx
```tsx
  const { 
    isLoading, 
    data: countries
  } = useQuery( 'country list', () => CountryService.getAll(),
    {
      onError: (error: any) => {
        console.log(error.message);
        
      },
      select: ({data}): ICountry[] => data.map(country => ({
        ...country,
        title: country.title + ' !!!'
      }))
    })
```

---

country.service.ts
```ts
import axios from 'axios'

const API_URL = 'http://localhost:3535'
axios.defaults.baseURL = API_URL

export const CountryService = {
  async getAll() {
    return axios.get('/countries')
  }
}
```

---

Создаем хук
hooks/useCountries.ts
```ts
import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountries = () => {
  const { 
    isLoading, 
    data: countries
  } = useQuery( 'country list', () => CountryService.getAll(),
    {
      onError: (error: any) => {
        console.log(error.message);
        
      },
      select: ({data}): ICountry[] => data.map(country => ({
        ...country,
        title: country.title + ' !!!'
      }))
    })
  return { isLoading, countries }
}
```

---

country.service.ts
```ts
import axios from 'axios'

const API_URL = 'http://localhost:3535'
axios.defaults.baseURL = API_URL

export const CountryService = {
  // async getAll() {
  //   return axios.get('/countries')
  // }
    async getById(id: string) {
    return axios.get<ICountry>(`/countries/${id}`)
  }
}
```

Создаем хук
enabled - будет срабатывать только когда существует id
hooks/useCountry.ts
```ts
import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountry = (id: string | undefined) => {
  const { 
    isLoading, 
    data: country
  } = useQuery(
    ['country list', id], 
    () => CountryService.getById(id || ''),
    {
      onError: (error: any) => {
        console.log(error.message);
      },
      select: ({data}): ICountry => data,
      enabled: !!id
    })
  return { isLoading, country }
}
```

---

page/country.ts
```ts
const Country = () => {
  const { id } = useParams()
  const { isLoading, country } = useCountry(String(id))
  
  return (
    <div className='container country'>
      <h1>{country?.title}</h1>
      { 
        isLoading ? <h1>LOADING...</h1> : (
          country ? (
            <div className='cards'>
              <div>
                <img  
                  src={country?.image || ''} 
                  alt={country?.title} 
                  width={250} 
                  height={160} 
                />
                <h2>{country?.title}</h2>
                <p>Population: <b>{country?.population}</b></p>
              </div>
            </div>
          ) : <h6>Element not found.</h6>
        )
      } 
    </div>
  )
}
```

---

Подгрузка данных по клику. 
Достаем refetch из useQuery и возвразаем его вместе с isLoading и countries.
Добавляем опцию --> enabled: false

hooks/useCountries.ts
```ts
export const useCountries = () => {
  const { 
    isLoading, 
    data: countries,
    refetch
  } = useQuery( 'country list', () => CountryService.getAll(),
    {
      onError: (error: any) => {
        console.log(error.message);
        
      },
      select: ({data}): ICountry[] => data.map(country => ({
        ...country,
        title: country.title + ' !!!'
      })),
      enabled: false
    })
  return { isLoading, countries, refetch }
}
```
Из useCountries достаем refetch.
Создаем кнопку Fetch Data. 
Передаем refetch в onClick
Countries.tsx
```tsx
  const { isLoading, countries, refetch } = useCountries()

  <button className='countries-btn' onClick={() => refetch()}>Fetch Data</button>
```

--- 

ReactQueryDevtools 

```tsx
import { ReactQueryDevtools } from 'react-query/devtools'

  <App />
  <ReactQueryDevtools initialIsOpen={false} />
```

---

POST запрос
country.service.ts
```ts
export interface ICountry {
  id: number
  title: string
  population: string
  image: string
}

export const CountryService = {
  // async getAll() {
  //   return axios.get<ICountry[]>('/countries')
  // },
  // async getById(id: string) {
  //   return axios.get<ICountry>(`/countries/${id}`)
  // },
  async crete(data: ICountry) {
    return axios.post('/countries', data, {
      headers: {'Content-Type:': 'application/json'} 
    })
  }
} 
```

Создать страницу CreateCountry
pages/CreateCountry.tsx

