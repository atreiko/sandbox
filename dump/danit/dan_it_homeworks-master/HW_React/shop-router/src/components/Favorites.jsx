import React, { useEffect, useState } from 'react';
import { Cards } from './Cards'

export const Favorites = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const itemFavorite = localStorage.getItem('Item');
        setData(JSON.parse(itemFavorite));
    },[])

    let cardsFavorite = data.map((item, index) => {
        return (
            <Cards
                name={item.name}
                id={item.id}
                price={item.price}
                article={item.article}
                photo={item.photo}
                url={item.url}
                key={index}
                item={item}
            />
        )
    })

return (
    <>
        <h1 className='title'>Favorite</h1>
        <div className='cards-container'>
            {cardsFavorite}
        </div>
    </>
)
}