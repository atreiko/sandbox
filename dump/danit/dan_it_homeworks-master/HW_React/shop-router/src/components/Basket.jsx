import React, { useEffect } from 'react';
// import { CardsBasket } from './CardsBasket'
import { Cards } from './Cards';
import { Delete } from './Delete';



export const Basket = (props) => {
    const { inBasket, showDeleteItem, removeFromBasket, item } = props;

    useEffect(() => {
        localStorage.getItem('ItemBasket')
    }, [])
    const itemBasket = localStorage.getItem('ItemBasket');

    let cardsBasket = []
    if (localStorage.getItem('ItemBasket')) {
        cardsBasket = JSON.parse(itemBasket).map((item) => (
                    <Cards
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        article={item.article}
                        photo={item.photo}
                        url={item.url}
                        key={item.id}

                    />   
        ))
    }
    console.log(cardsBasket);



    return (
        <>
            <h1 className='title'>Basket</h1>
            <div className='cards-container'>
                    {cardsBasket}
            </div>
        </>
    )
}