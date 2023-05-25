import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Cards } from './Cards';


export const Container = () => {
    const [allData, setAllData] = useState([]);
    const [favorite, setFavorite] = useState(null)
    const [basket, setBasket] = useState(null)

    useEffect(() => {
        fetch('./MOCK_DATA.json')
            .then(response => response.json())
            .then(data => setAllData(data));

        if (JSON.parse(localStorage.getItem("ItemFavorite")) === null) {
            setFavorite([])
        } else {
            setFavorite(JSON.parse(localStorage.getItem("ItemFavorite")))
        }

        if (JSON.parse(localStorage.getItem("ItemBasket")) === null) {
            setBasket([])
        } else {
            setBasket(JSON.parse(localStorage.getItem("ItemBasket")))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("ItemFavorite", JSON.stringify(favorite))
    }, [favorite])

    useEffect(() => {
        localStorage.setItem("ItemBasket", JSON.stringify(basket))
    }, [basket])

    const removeFavorite = (item) => {
        setFavorite(favorite.filter((elem) => elem.id !== item.id));
    }

    const addFavorite = (item) => {
        setFavorite(prev => [...prev, item])
    };

    const addToBasket = (item) => {
        setBasket(prev => [...prev, item])
    }

    return (
        <div className='cards-container'>
            {
                allData.map(item =>
                    <Cards
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        article={item.article}
                        photo={item.photo}
                        url={item.url}
                        key={item.id}
                        removeFavorite={addFavorite}
                        addFavorite={removeFavorite}
                        item={item}
                        addToBasket={addToBasket}
                    />
                )
            }
        </div>
    )
}

Container.propTypes = {
    data: PropTypes.array,
    favorite: PropTypes.array,
}

Container.defaultProps = {
    data: [{
        "id": 12,
        "price": "$3.41",
        "photo": "https://robohash.org/ipsumetomnis.png?size=300x300&set=set1",
        "url": "http://deviantart.com",
        "name": "Atorak",
        "article": "62080-6001"
    }]
}
